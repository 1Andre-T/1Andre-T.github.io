import { describe, it, expect, beforeAll } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { JSDOM } from 'jsdom'

const SITIO = '_site'          // la carpeta que arma el job build
let doc

beforeAll(() => {
  const html = readFileSync(`${SITIO}/index.html`, 'utf-8')
  doc = new JSDOM(html).window.document
})

describe('index.html', () => {
  it('tiene un título', () => {
    expect(doc.title.trim()).not.toBe('')
  })

  it('muestra mi nombre en el h1', () => {
    expect(doc.querySelector('h1')?.textContent).toContain('Andre Torres')
  })

  it('todas las imágenes tienen texto alternativo', () => {
    const sinAlt = [...doc.querySelectorAll('img')].filter((img) => !img.getAttribute('alt'))
    expect(sinAlt).toHaveLength(0)
  })

  it('los archivos locales que usa la página existen', () => {
    const rutas = [...doc.querySelectorAll('script[src], link[rel="stylesheet"], img[src]')]
      .map((el) => el.getAttribute('src') ?? el.getAttribute('href'))
      .filter((ruta) => !/^(https?:)?\/\//.test(ruta))   // ignora lo que viene de Internet
    for (const ruta of rutas) {
      expect(existsSync(`${SITIO}/${ruta}`), `falta ${ruta}`).toBe(true)
    }
  })
})

describe('el sitio que se publica', () => {
  it('no incluye archivos internos del repositorio', () => {
    for (const interno of ['compose.yaml', '.env.example', 'api', 'db', 'tests']) {
      expect(existsSync(`${SITIO}/${interno}`), `${interno} no debería publicarse`).toBe(false)
    }
  })
describe('Mis 5 pruebas propias (Requisito B3)', () => {
  it('1. La página declara lang="es"', () => {
    expect(doc.documentElement.getAttribute('lang')).toBe('es')
  })
  it('2. Declara el charset', () => {
    expect(doc.querySelector('meta[charset]')).not.toBeNull()
  })
  it('3. La etiqueta viewport existe', () => {
    expect(doc.querySelector('meta[name="viewport"]')).not.toBeNull()
  })
  it('4. Hay un solo h1', () => {
    expect(doc.querySelectorAll('h1')).toHaveLength(1)
  })
  it('5. El formulario del libro de visitas existe', () => {
    expect(doc.querySelector('form')).not.toBeNull()
  })
})
})