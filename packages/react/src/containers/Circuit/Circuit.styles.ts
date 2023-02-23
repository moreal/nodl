import { css } from '@emotion/css';

import { Bounds } from '../../utils/bounds/bounds.types';

export const circuitSelectionStyles = ({ x, y, width, height }: Bounds) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: ${width}px;
    height: ${height}px;
    transform: translate(${x}px, ${y}px);
    border: 1px solid var(--accent-color);
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 29;
`;

export const circuitContainerStyles = css`
    position: absolute;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    font-size: 12px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    // Font Sizes
    --font-size-hero: 5em;
    --font-size-xl: 4em;
    --font-size-lg: 3em;
    --font-size-md: 2em;
    --font-size-sm: 1.2em;
    --font-size-xs: 1em;
    --font-size-xxs: 0.8em;

    // Colors
    --dark-contrast-background: #12141c;
    --dark-background: #1c1e2a;
    --panel-background: #242736;
    --light-background: #fff;
    --neutral-background: #f4f4f4;
    --border-color: #34384e;
    --connection-color: #424763;
    --accent-color: #1e62ff;
    --accent-color-subtle: rgba(30, 98, 255, 0.8);
    --text-light-color: #fff;
    --text-neutral-color: #7b7e8c;
    --text-dark-color: #000;

    --system-red: #ff4444;
    --system-yellow: #ffdd00;

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url('Inter-Thin.woff2?v=3.19') format('woff2'), url('Inter-Thin.woff?v=3.19') format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: url('Inter-ThinItalic.woff2?v=3.19') format('woff2'), url('Inter-ThinItalic.woff?v=3.19') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url('Inter-ExtraLight.woff2?v=3.19') format('woff2'), url('Inter-ExtraLight.woff?v=3.19') format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url('Inter-ExtraLightItalic.woff2?v=3.19') format('woff2'),
            url('Inter-ExtraLightItalic.woff?v=3.19') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('Inter-Light.woff2?v=3.19') format('woff2'), url('Inter-Light.woff?v=3.19') format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url('Inter-LightItalic.woff2?v=3.19') format('woff2'), url('Inter-LightItalic.woff?v=3.19') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('Inter-Regular.woff2?v=3.19') format('woff2'), url('Inter-Regular.woff?v=3.19') format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('Inter-Italic.woff2?v=3.19') format('woff2'), url('Inter-Italic.woff?v=3.19') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('Inter-Medium.woff2?v=3.19') format('woff2'), url('Inter-Medium.woff?v=3.19') format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url('Inter-MediumItalic.woff2?v=3.19') format('woff2'),
            url('Inter-MediumItalic.woff?v=3.19') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('Inter-SemiBold.woff2?v=3.19') format('woff2'), url('Inter-SemiBold.woff?v=3.19') format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url('Inter-SemiBoldItalic.woff2?v=3.19') format('woff2'),
            url('Inter-SemiBoldItalic.woff?v=3.19') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('Inter-Bold.woff2?v=3.19') format('woff2'), url('Inter-Bold.woff?v=3.19') format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('Inter-BoldItalic.woff2?v=3.19') format('woff2'), url('Inter-BoldItalic.woff?v=3.19') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('Inter-ExtraBold.woff2?v=3.19') format('woff2'), url('Inter-ExtraBold.woff?v=3.19') format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url('Inter-ExtraBoldItalic.woff2?v=3.19') format('woff2'),
            url('Inter-ExtraBoldItalic.woff?v=3.19') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('Inter-Black.woff2?v=3.19') format('woff2'), url('Inter-Black.woff?v=3.19') format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url('Inter-BlackItalic.woff2?v=3.19') format('woff2'), url('Inter-BlackItalic.woff?v=3.19') format('woff');
    }

    /* -------------------------------------------------------
Variable font.
Usage:

  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
*/
    @font-face {
        font-family: 'Inter var';
        font-weight: 100 900;
        font-display: swap;
        font-style: normal;
        font-named-instance: 'Regular';
        src: url('Inter-roman.var.woff2?v=3.19') format('woff2');
    }
    @font-face {
        font-family: 'Inter var';
        font-weight: 100 900;
        font-display: swap;
        font-style: italic;
        font-named-instance: 'Italic';
        src: url('Inter-italic.var.woff2?v=3.19') format('woff2');
    }

    /* --------------------------------------------------------------------------
[EXPERIMENTAL] Multi-axis, single variable font.

Slant axis is not yet widely supported (as of February 2019) and thus this
multi-axis single variable font is opt-in rather than the default.

When using this, you will probably need to set font-variation-settings
explicitly, e.g.

  * { font-variation-settings: "slnt" 0deg }
  .italic { font-variation-settings: "slnt" 10deg }

*/
    @font-face {
        font-family: 'Inter var experimental';
        font-weight: 100 900;
        font-display: swap;
        font-style: oblique 0deg 10deg;
        src: url('Inter.var.woff2?v=3.19') format('woff2');
    }
`;
