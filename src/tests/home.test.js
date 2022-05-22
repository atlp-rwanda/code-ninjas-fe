import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Welcome from '../pages/index';

describe('Landing Page component', () => {
  beforeAll(() => {
    render(
      <Router>
        <Welcome />
      </Router>
    );
  });

  it('should have the right message in the dom', () => {
    const message = 'Welcome to Barefoot Nomad';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('Should Take Snapshot for Home Component', () => {
    const renderedComponent = renderer.create(<Welcome />).toJSON();
    expect(renderedComponent).toMatchInlineSnapshot(`
      Array [
        <div>
          <header
            className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-a0yu7s-MuiPaper-root-MuiAppBar-root"
          >
            <div
              className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-13zrtfo-MuiToolbar-root"
            >
              <div
                className="MuiBox-root css-1rr4qq7"
              />
              <a
                className="MuiTypography-root MuiTypography-h6 MuiLink-root MuiLink-underlineNone css-j3k606-MuiTypography-root-MuiLink-root"
                href="/"
                onBlur={[Function]}
                onFocus={[Function]}
              >
                Barefoot Nomad
              </a>
              <div
                className="MuiBox-root css-1j9bsaa"
              >
                <a
                  className="MuiTypography-root MuiTypography-h6 MuiLink-root MuiLink-underlineNone css-1d3f0pp-MuiTypography-root-MuiLink-root"
                  href="/login"
                  onBlur={[Function]}
                  onFocus={[Function]}
                >
                  <button
                    className="MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root  css-ruq9rl-MuiButtonBase-root-MuiButton-root"
                    disabled={false}
                    onBlur={[Function]}
                    onContextMenu={[Function]}
                    onDragLeave={[Function]}
                    onFocus={[Function]}
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                    onMouseDown={[Function]}
                    onMouseLeave={[Function]}
                    onMouseUp={[Function]}
                    onTouchEnd={[Function]}
                    onTouchMove={[Function]}
                    onTouchStart={[Function]}
                    tabIndex={0}
                    type="button"
                  >
                    Login
                  </button>
                </a>
                <a
                  className="MuiTypography-root MuiTypography-h6 MuiLink-root MuiLink-underlineNone css-cx87t7-MuiTypography-root-MuiLink-root"
                  href="/registration"
                  onBlur={[Function]}
                  onFocus={[Function]}
                >
                  <button
                    className="MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root  css-ruq9rl-MuiButtonBase-root-MuiButton-root"
                    disabled={false}
                    onBlur={[Function]}
                    onContextMenu={[Function]}
                    onDragLeave={[Function]}
                    onFocus={[Function]}
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                    onMouseDown={[Function]}
                    onMouseLeave={[Function]}
                    onMouseUp={[Function]}
                    onTouchEnd={[Function]}
                    onTouchMove={[Function]}
                    onTouchStart={[Function]}
                    tabIndex={0}
                    type="button"
                  >
                    Register
                  </button>
                </a>
              </div>
            </div>
          </header>
          <div
            className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-1mkqci-MuiToolbar-root"
          />
        </div>,
        <section
          className="css-19wmqo9"
        >
          <div
            className="MuiContainer-root MuiContainer-maxWidthLg css-p7auv0-MuiContainer-root"
          >
            <img
              alt="wonder"
              height="80"
              src={Object {}}
              width="147"
            />
            <img
              alt="increase priority"
              src="https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80"
              style={
                Object {
                  "display": "none",
                }
              }
            />
            <h1
              className="MuiTypography-root MuiTypography-h2 MuiTypography-alignCenter css-1ncv4ep-MuiTypography-root"
            >
              Welcome to Barefoot Nomad
              <span
                className="OnePirateTypography-markedH2Center"
              />
            </h1>
            <h3
              className="MuiTypography-root MuiTypography-h5 MuiTypography-alignCenter css-iodznc-MuiTypography-root"
            >
              Best Travel Service Provider
            </h3>
            <a
              className="MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButtonBase-root css-og2huf-MuiButtonBase-root-MuiButton-root"
              href="/"
              onBlur={[Function]}
              onContextMenu={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              tabIndex={0}
            >
              Get started
            </a>
            <p
              className="MuiTypography-root MuiTypography-body2 css-18191oj-MuiTypography-root"
            >
              Discover the experience
            </p>
            <div
              className="MuiBox-root css-wvalkt"
            />
            <div
              className="MuiBox-root css-qzsf4t"
            />
            <img
              alt="arrow down"
              className="MuiBox-root css-1wc87yv"
              onClick={[Function]}
              src={Object {}}
            />
          </div>
        </section>,
        <section
          className="MuiBox-root css-1qc11ss"
          id="main"
        >
          <div
            className="MuiContainer-root MuiContainer-maxWidthLg css-1xdaf2d-MuiContainer-root"
          >
            <img
              alt="curvy lines"
              className="MuiBox-root css-1epxpy3"
              src={Object {}}
            />
            <div
              className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-5 css-1ld3b9g-MuiGrid-root"
            >
              <div
                className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-1lj5egr-MuiGrid-root"
              >
                <div
                  className="MuiBox-root css-19zp38f"
                >
                  <img
                    alt="suitcase"
                    className="MuiBox-root css-1k9bk4"
                    src={Object {}}
                  />
                  <h2
                    className="MuiTypography-root MuiTypography-h6 css-1q0apn4-MuiTypography-root"
                  >
                    The best luxury hotels
                  </h2>
                  <h3
                    className="MuiTypography-root MuiTypography-h5 css-dlw4xn-MuiTypography-root"
                  >
                    From the latest trendy boutique hotel to the iconic palace with XXL pool , go for a mini-vacation just a few subway stops away from your home.
                  </h3>
                </div>
              </div>
              <div
                className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-1lj5egr-MuiGrid-root"
              >
                <div
                  className="MuiBox-root css-19zp38f"
                >
                  <img
                    alt="graph"
                    className="MuiBox-root css-1k9bk4"
                    src={Object {}}
                  />
                  <h2
                    className="MuiTypography-root MuiTypography-h6 css-1q0apn4-MuiTypography-root"
                  >
                    New experiences
                  </h2>
                  <h3
                    className="MuiTypography-root MuiTypography-h5 css-dlw4xn-MuiTypography-root"
                  >
                    Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike.
                  </h3>
                </div>
              </div>
              <div
                className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-1lj5egr-MuiGrid-root"
              >
                <div
                  className="MuiBox-root css-19zp38f"
                >
                  <img
                    alt="clock"
                    className="MuiBox-root css-1k9bk4"
                    src={Object {}}
                  />
                  <h2
                    className="MuiTypography-root MuiTypography-h6 css-1q0apn4-MuiTypography-root"
                  >
                    Exclusive rates
                  </h2>
                  <h3
                    className="MuiTypography-root MuiTypography-h5 css-dlw4xn-MuiTypography-root"
                  >
                    By registering, you will access specially negotiated rates that you will not find anywhere else.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>,
        <section
          className="MuiContainer-root MuiContainer-maxWidthLg css-idqtlw-MuiContainer-root"
        >
          <h2
            className="MuiTypography-root MuiTypography-h4 MuiTypography-alignCenter css-mp0qap-MuiTypography-root"
          >
            For all tastes and all desires
            <span
              className="OnePirateTypography-markedH4Center"
            />
          </h2>
          <div
            className="MuiBox-root css-197jfpu"
          >
            <button
              className="MuiButtonBase-root css-17b4s68-MuiButtonBase-root"
              disabled={false}
              onBlur={[Function]}
              onContextMenu={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              style={
                Object {
                  "width": "40%",
                }
              }
              tabIndex={0}
              type="button"
            >
              <div
                className="MuiBox-root css-1tro73s"
              />
              <div
                className="imageBackdrop css-myflv1"
              />
              <div
                className="MuiBox-root css-1yrzk2j"
              >
                <h3
                  className="MuiTypography-root MuiTypography-h6 imageTitle css-b4mjuu-MuiTypography-root"
                >
                  Snorkeling
                  <div
                    className="imageMarked"
                  />
                </h3>
              </div>
            </button>
            <button
              className="MuiButtonBase-root css-17b4s68-MuiButtonBase-root"
              disabled={false}
              onBlur={[Function]}
              onContextMenu={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              style={
                Object {
                  "width": "20%",
                }
              }
              tabIndex={0}
              type="button"
            >
              <div
                className="MuiBox-root css-1t6tx54"
              />
              <div
                className="imageBackdrop css-myflv1"
              />
              <div
                className="MuiBox-root css-1yrzk2j"
              >
                <h3
                  className="MuiTypography-root MuiTypography-h6 imageTitle css-b4mjuu-MuiTypography-root"
                >
                  Massage
                  <div
                    className="imageMarked"
                  />
                </h3>
              </div>
            </button>
            <button
              className="MuiButtonBase-root css-17b4s68-MuiButtonBase-root"
              disabled={false}
              onBlur={[Function]}
              onContextMenu={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              style={
                Object {
                  "width": "40%",
                }
              }
              tabIndex={0}
              type="button"
            >
              <div
                className="MuiBox-root css-5q03f0"
              />
              <div
                className="imageBackdrop css-myflv1"
              />
              <div
                className="MuiBox-root css-1yrzk2j"
              >
                <h3
                  className="MuiTypography-root MuiTypography-h6 imageTitle css-b4mjuu-MuiTypography-root"
                >
                  Hiking
                  <div
                    className="imageMarked"
                  />
                </h3>
              </div>
            </button>
            <button
              className="MuiButtonBase-root css-17b4s68-MuiButtonBase-root"
              disabled={false}
              onBlur={[Function]}
              onContextMenu={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              style={
                Object {
                  "width": "38%",
                }
              }
              tabIndex={0}
              type="button"
            >
              <div
                className="MuiBox-root css-1wuc5bb"
              />
              <div
                className="imageBackdrop css-myflv1"
              />
              <div
                className="MuiBox-root css-1yrzk2j"
              >
                <h3
                  className="MuiTypography-root MuiTypography-h6 imageTitle css-b4mjuu-MuiTypography-root"
                >
                  Tour
                  <div
                    className="imageMarked"
                  />
                </h3>
              </div>
            </button>
            <button
              className="MuiButtonBase-root css-17b4s68-MuiButtonBase-root"
              disabled={false}
              onBlur={[Function]}
              onContextMenu={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              style={
                Object {
                  "width": "38%",
                }
              }
              tabIndex={0}
              type="button"
            >
              <div
                className="MuiBox-root css-srx4r7"
              />
              <div
                className="imageBackdrop css-myflv1"
              />
              <div
                className="MuiBox-root css-1yrzk2j"
              >
                <h3
                  className="MuiTypography-root MuiTypography-h6 imageTitle css-b4mjuu-MuiTypography-root"
                >
                  Gastronomy
                  <div
                    className="imageMarked"
                  />
                </h3>
              </div>
            </button>
            <button
              className="MuiButtonBase-root css-17b4s68-MuiButtonBase-root"
              disabled={false}
              onBlur={[Function]}
              onContextMenu={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              style={
                Object {
                  "width": "24%",
                }
              }
              tabIndex={0}
              type="button"
            >
              <div
                className="MuiBox-root css-fjbzwq"
              />
              <div
                className="imageBackdrop css-myflv1"
              />
              <div
                className="MuiBox-root css-1yrzk2j"
              >
                <h3
                  className="MuiTypography-root MuiTypography-h6 imageTitle css-b4mjuu-MuiTypography-root"
                >
                  Shopping
                  <div
                    className="imageMarked"
                  />
                </h3>
              </div>
            </button>
            <button
              className="MuiButtonBase-root css-17b4s68-MuiButtonBase-root"
              disabled={false}
              onBlur={[Function]}
              onContextMenu={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              style={
                Object {
                  "width": "40%",
                }
              }
              tabIndex={0}
              type="button"
            >
              <div
                className="MuiBox-root css-33w2uq"
              />
              <div
                className="imageBackdrop css-myflv1"
              />
              <div
                className="MuiBox-root css-1yrzk2j"
              >
                <h3
                  className="MuiTypography-root MuiTypography-h6 imageTitle css-b4mjuu-MuiTypography-root"
                >
                  Walking
                  <div
                    className="imageMarked"
                  />
                </h3>
              </div>
            </button>
            <button
              className="MuiButtonBase-root css-17b4s68-MuiButtonBase-root"
              disabled={false}
              onBlur={[Function]}
              onContextMenu={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              style={
                Object {
                  "width": "20%",
                }
              }
              tabIndex={0}
              type="button"
            >
              <div
                className="MuiBox-root css-115vbjq"
              />
              <div
                className="imageBackdrop css-myflv1"
              />
              <div
                className="MuiBox-root css-1yrzk2j"
              >
                <h3
                  className="MuiTypography-root MuiTypography-h6 imageTitle css-b4mjuu-MuiTypography-root"
                >
                  Fitness
                  <div
                    className="imageMarked"
                  />
                </h3>
              </div>
            </button>
            <button
              className="MuiButtonBase-root css-17b4s68-MuiButtonBase-root"
              disabled={false}
              onBlur={[Function]}
              onContextMenu={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              style={
                Object {
                  "width": "40%",
                }
              }
              tabIndex={0}
              type="button"
            >
              <div
                className="MuiBox-root css-1gw3le9"
              />
              <div
                className="imageBackdrop css-myflv1"
              />
              <div
                className="MuiBox-root css-1yrzk2j"
              >
                <h3
                  className="MuiTypography-root MuiTypography-h6 imageTitle css-b4mjuu-MuiTypography-root"
                >
                  Reading
                  <div
                    className="imageMarked"
                  />
                </h3>
              </div>
            </button>
          </div>
        </section>,
        <section
          className="MuiBox-root css-1tgtuz1"
        >
          <div
            className="MuiContainer-root MuiContainer-maxWidthLg css-1llydmb-MuiContainer-root"
          >
            <img
              alt="curvy lines"
              className="MuiBox-root css-17w9039"
              src={Object {}}
            />
            <h2
              className="MuiTypography-root MuiTypography-h4 css-1t86j9-MuiTypography-root"
            >
              How it works
              <span
                className="OnePirateTypography-markedH4Center"
              />
            </h2>
            <div>
              <div
                className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-5 css-1ld3b9g-MuiGrid-root"
              >
                <div
                  className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-1lj5egr-MuiGrid-root"
                >
                  <div
                    className="MuiBox-root css-19zp38f"
                  >
                    <div
                      className="MuiBox-root css-1uhgjh0"
                    >
                      1.
                    </div>
                    <img
                      alt="suitcase"
                      className="MuiBox-root css-gop4m4"
                      src={Object {}}
                    />
                    <h3
                      className="MuiTypography-root MuiTypography-h5 MuiTypography-alignCenter css-gr2wfj-MuiTypography-root"
                    >
                      Appointment every Wednesday 9am.
                    </h3>
                  </div>
                </div>
                <div
                  className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-1lj5egr-MuiGrid-root"
                >
                  <div
                    className="MuiBox-root css-19zp38f"
                  >
                    <div
                      className="MuiBox-root css-1uhgjh0"
                    >
                      2.
                    </div>
                    <img
                      alt="graph"
                      className="MuiBox-root css-gop4m4"
                      src={Object {}}
                    />
                    <h3
                      className="MuiTypography-root MuiTypography-h5 MuiTypography-alignCenter css-gr2wfj-MuiTypography-root"
                    >
                      First come, first served. Our offers are in limited quantities, so be quick.
                    </h3>
                  </div>
                </div>
                <div
                  className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-1lj5egr-MuiGrid-root"
                >
                  <div
                    className="MuiBox-root css-19zp38f"
                  >
                    <div
                      className="MuiBox-root css-1uhgjh0"
                    >
                      3.
                    </div>
                    <img
                      alt="clock"
                      className="MuiBox-root css-gop4m4"
                      src={Object {}}
                    />
                    <h3
                      className="MuiTypography-root MuiTypography-h5 MuiTypography-alignCenter css-gr2wfj-MuiTypography-root"
                    >
                      New offers every week. New experiences, new surprises. Your Sundays will no longer be alike.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>,
        <footer
          className="MuiBox-root css-16ybtzv"
        >
          <p
            className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignCenter css-1xatcrf-MuiTypography-root"
          >
            Barefoot Nomad
          </p>
          <p
            className="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter css-1vl95ex-MuiTypography-root"
          >
            Copyright ©
            <a
              className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1cghntr-MuiTypography-root-MuiLink-root"
              href="/"
              onBlur={[Function]}
              onFocus={[Function]}
            >
              Barefoot Nomad
            </a>
             
            2022
            .
          </p>
        </footer>,
      ]
    `);
  });

  afterAll(cleanup);
});
