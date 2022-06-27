import { LitElement, html, css } from 'lit'

// Including the following imports appears to break source mapping
import * as Sentry from '@sentry/browser'
import { BrowserTracing } from '@sentry/tracing'
// Comment out the above imports to fix source mapping

export class MyApp extends LitElement {
  static get styles () {
    return [
      css`
        :host {
          height: 100%;
          width: 100%;
          padding: 24px;
          display: block;
        }
        div {
          width: 100px;
          height: 100px;
          background: tomato;
          cursor: pointer;
        }
      `
    ]
  }

  render () {
    return html`
      <div @click=${() => this.handleClick()}>Click me</div>
    `
  }

  handleClick () {
    // Try putting a breakpoint on line 36 in Chrome devtools
    console.log('Clicked!')
  }
}

window.customElements.define('my-app', MyApp)
