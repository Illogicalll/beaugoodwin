import { mkdirSync } from 'fs'

const PORT = 3000

mkdirSync('./public', { recursive: true })

async function buildCSS(): Promise<string> {
  const result = await Bun.spawn(
    ['./node_modules/.bin/tailwindcss', '-i', './src/index.css', '-o', '/dev/stdout'],
    { stdout: 'pipe', stderr: 'inherit' }
  )
  return await new Response(result.stdout).text()
}

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url)

    if (url.pathname === '/styles.css') {
      const css = await buildCSS()
      return new Response(css, { headers: { 'Content-Type': 'text/css' } })
    }

    if (url.pathname.startsWith('/fonts/')) {
      const file = Bun.file(`./public${url.pathname}`)
      if (await file.exists()) return new Response(file)
    }

    if (url.pathname === '/bundle.js') {
      const result = await Bun.build({
        entrypoints: ['./src/main.tsx'],
        target: 'browser',
        sourcemap: 'inline',
      })
      if (!result.success) {
        const errors = result.logs.map(l => l.message).join('\n')
        return new Response(`console.error(${JSON.stringify(errors)})`, {
          headers: { 'Content-Type': 'application/javascript' },
        })
      }
      return new Response(result.outputs[0], {
        headers: { 'Content-Type': 'application/javascript' },
      })
    }

    return new Response(Bun.file('index.html'))
  },
})

console.log(`Dev server → http://localhost:${server.port}`)
