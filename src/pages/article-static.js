import React from "react";
import Layout from "../components/partial/Layout";

export default function ArticleStatic() {
  return (
    <Layout>
      <main id='main' className='site-main article cms-content'>
        <section
          className='main-banner text-dark text-left line-bottom-right'
          style={{ backgroundImage: "url(images/bg-banner-white.jpg)" }}
        >
          <div className='wrapper'>
            <div className='row row-flex row-flex-reverse'>
              <div className='col-image hide-for-mobile'>
                <picture>
                  <source
                    media='(min-width: 1024px)'
                    srcSet='https://picsum.photos/id/1/384/250'
                  />
                  <source srcSet='https://picsum.photos/id/1/384/250' />
                  <img
                    loading='lazy'
                    src='https://picsum.photos/id/1/384/250'
                    alt=''
                  />
                </picture>
              </div>
              <div className='col-text'>
                <div className='content'>
                  <h3 className='title'>
                    The quick brown fox jumps over the lazy dog
                  </h3>
                  <div className='information'>
                    <div className='thumbnail'>
                      <picture>
                        <source
                          media='(min-width: 1024px)'
                          srcSet='images/thumbnail-blogs.png'
                        />
                        <source srcSet='images/thumbnail-blogs-mobile.png' />
                        <img
                          loading='lazy'
                          src='images/thumbnail-blogs.png'
                          alt=''
                        />
                      </picture>
                    </div>
                    <div className='text'>
                      <p>
                        <strong>Author:</strong>Rowan Burgess
                      </p>
                      <ul className='show-date'>
                        <li>
                          <span className='icon'>
                            <i className='icon-calendar' />
                          </span>
                          13 Feb 2021
                        </li>
                        <li>
                          <span className='icon'>
                            <i className='icon-time' />
                          </span>
                          20 minutes
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className='show-tags'>
                    <li>
                      <a href='#'>Magento</a>
                    </li>
                    <li>
                      <a href='#'>Ux</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='table-of-content'>
          <div className='wrapper'>
            <div className='row'>
              <div className='content'>
                <h6 className='title'>Table of contents</h6>
                <div className='text'>
                  <ul>
                    <li>
                      <a href='#'>Praesent porta sem magna</a>
                    </li>
                    <li>
                      <a href='#'>Vitae suscipit augue porttitor eget</a>
                    </li>
                    <li>
                      <a href='#'>Nam quis aliquam ex</a>
                    </li>
                    <li>
                      <a href='#'>Nunc lobortis sem sapien</a>
                    </li>
                    <li>
                      <a href='#'>In bibendum turpis accumsan nec</a>
                    </li>
                    <li>
                      <a href='#'>
                        Mauris sollicitudin arcu vitae mollis finibus
                      </a>
                    </li>
                    <li>
                      <a href='#'>Fusce tincidunt nisi a lacus aliquam</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='article-content'>
          <div className='social-sticky'>
            <div className='wrapper'>
              <ul>
                <li style={{ backgroundColor: "#1173b0" }}>
                  <a href='#'>
                    <i className='icon-linkedin-white' />
                  </a>
                </li>
                <li style={{ backgroundColor: "#55acee" }}>
                  <a href='#'>
                    <i className='icon-twitter-white' />
                  </a>
                </li>
                <li style={{ backgroundColor: "#3b5998" }}>
                  <a href='#'>
                    <i className='icon-f-white' />
                  </a>
                </li>
                <li style={{ backgroundColor: "#c8232c" }}>
                  <a href='#'>
                    <i className='icon-pinterest-white' />
                  </a>
                </li>
                <li style={{ backgroundColor: "#25d366" }}>
                  <a href='#'>
                    <i className='icon-whatsapp-white' />
                  </a>
                </li>
                <li style={{ backgroundColor: "#999999" }}>
                  <a href='#'>
                    <i className='icon-email-white' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='wrapper'>
            <div className='row'>
              <h5 className='h5'>Curabitur mollis lacus turpis</h5>
              <p>
                Quisque a fermentum sem. Ut quis nisi massa.
                <a href='#'>Cras mattis</a> arcu sit amet nibh sodales, ut
                placerat ipsum faucibus. Pellentesque pretium mauris venenatis
                risus facilisis, eu placerat tellus bibendum. Morbi pellentesque
                ipsum eget libero auctor, id feugiat nisi consequat. Vestibulum
                aliquam non purus vitae finibus.
              </p>
              <h6>Quisque a fermentum sem</h6>
              <p>
                Morbi rhoncus, mi eu feugiat tempor, risus lacus accumsan dolor,
                vitae bibendum turpis neque at arcu. Fusce convallis risus dui,
                <a href='#'>laoreet pharetra</a> sem sagittis ac. Curabitur
                mollis lacus turpis, elementum euismod nunc blandit ut.
              </p>
              <div className='image full box-shadow'>
                <div className='box-shadow'>
                  <img
                    src='https://images.prismic.io/burgesscommerce/3f6ea544-9951-40c6-80a4-b381945b40e3_cms-image.jpg?auto=compress,format'
                    alt=''
                  />
                </div>
                <p className='photo-caption'>
                  This is a caption text for the image above.
                </p>
              </div>
              <p>
                Morbi rhoncus, mi eu feugiat tempor, risus lacus accumsan dolor,
                vitae bibendum turpis neque at arcu. Fusce convallis risus dui,
                laoreet pharetra sem sagittis ac. Curabitur mollis lacus turpis,
                elementum euismod nunc blandit ut. Quisque a fermentum sem. Ut
                quis nisi massa. Cras mattis arcu sit amet nibh sodales.
              </p>
              <pre>
                <code className='code'>
                  {"\n"}
                  {"\n"}
                  {"    "}&lt;?php{"\n"}
                  {"        "}
                  $GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields'] .=
                  ',tx_realurl_pathsegment';{"\n"}
                  {"\n"}
                  {"        "}// Adjust to your needs{"\n"}
                  {"        "}$domain = 'www.example.com';{"\n"}
                  {"        "}$rootPageUid = 123;{"\n"}
                  {"        "}$rssFeedPageType = 9181; // pageType of your RSS
                  feed page{"\n"}
                  {"\n"}
                </code>
                {"\n"}
                {"                    "}
              </pre>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec
              </p>
              <h5>Mauris sollicitudin arcu vitae mollis finibus</h5>
              <div className='twocols'>
                <div className='row-flex'>
                  <div className='col-image'>
                    <picture>
                      <source
                        media='(min-width: 1024px)'
                        srcSet='https://images.prismic.io/burgesscommerce/6fa3c3fa-3979-4879-a713-ac03331ea54d_blog-post-1.jpg?auto=compress,format'
                      />
                      <source srcSet='https://images.prismic.io/burgesscommerce/6fa3c3fa-3979-4879-a713-ac03331ea54d_blog-post-1.jpg?auto=compress,format' />
                      <img
                        loading='lazy'
                        src='https://images.prismic.io/burgesscommerce/6fa3c3fa-3979-4879-a713-ac03331ea54d_blog-post-1.jpg?auto=compress,format'
                        alt=''
                      />
                    </picture>
                  </div>
                  <div className='col-text'>
                    <p>
                      Praesent porta sem magna, vitae suscipit augue porttitor
                      eget. Nam quis aliquam ex. Nunc lobortis sem sapien, in
                      bibendum turpis accumsan nec. Mauris sollicitudin arcu
                      vitae mollis finibus.
                    </p>
                    <p>
                      Fusce tincidunt nisi a lacus aliquam, vitae ultricies nisl
                      ornare. Nulla tempor vel ex.
                    </p>
                  </div>
                </div>
              </div>
              <div className='table'>
                <table>
                  <thead>
                    <tr>
                      <th />
                      <th>Germany</th>
                      <th>France</th>
                      <th>Italy</th>
                      <th>Sweden</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>January</td>
                      <td>648</td>
                      <td>124</td>
                      <td>647</td>
                      <td>687</td>
                    </tr>
                    <tr>
                      <td>February</td>
                      <td>765</td>
                      <td>536</td>
                      <td>362</td>
                      <td>291</td>
                    </tr>
                    <tr>
                      <td>March</td>
                      <td>382</td>
                      <td>947</td>
                      <td>253</td>
                      <td>379</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec. Mauris sollicitudin arcu vitae mollis
                finibus. Fusce tincidunt nisi a lacus aliquam.
              </p>
              <p className='quote'>
                “Nulla tempor vel ex a condimentum. Cras a vulputate odio.
                Praesent consectetur velit mi, ac tempor metus interdum nec.
                Nulla dapibus laoreet elit lacinia viverra.”
              </p>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec. Mauris sollicitudin arcu vitae mollis
                finibus. Fusce tincidunt nisi a lacus aliquam, vitae ultricies
                nisl ornare. Nulla tempor vel ex a condimentum..
              </p>
              <ul>
                <li>Praesent porta sem magna</li>
                <li>Vitae suscipit augue porttitor eget</li>
                <li>Nam quis aliquam ex</li>
                <li>Nunc lobortis sem sapien</li>
                <li>In bibendum turpis accumsan nec</li>
                <li>Mauris sollicitudin arcu vitae mollis finibus</li>
                <li>Fusce tincidunt nisi a lacus aliquam</li>
              </ul>
              <div className='twocols'>
                <div className='row-flex'>
                  <div className='col-image'>
                    <h6>Before situation</h6>
                    <picture>
                      <source
                        media='(min-width: 1024px)'
                        srcSet='https://images.prismic.io/burgesscommerce/66d17208-271e-4a92-9176-40640af33d7e_blog-post-2.jpg?auto=compress,format'
                      />
                      <source srcSet='https://images.prismic.io/burgesscommerce/66d17208-271e-4a92-9176-40640af33d7e_blog-post-2.jpg?auto=compress,format' />
                      <img
                        loading='lazy'
                        src='https://images.prismic.io/burgesscommerce/66d17208-271e-4a92-9176-40640af33d7e_blog-post-2.jpg?auto=compress,format'
                        alt=''
                      />
                    </picture>
                  </div>
                  <div className='col-image'>
                    <h6>After situation</h6>
                    <picture>
                      <source
                        media='(min-width: 1024px)'
                        srcSet='https://images.prismic.io/burgesscommerce/6fa3c3fa-3979-4879-a713-ac03331ea54d_blog-post-1.jpg?auto=compress,format'
                      />
                      <source srcSet='https://images.prismic.io/burgesscommerce/6fa3c3fa-3979-4879-a713-ac03331ea54d_blog-post-1.jpg?auto=compress,format' />
                      <img
                        loading='lazy'
                        src='https://images.prismic.io/burgesscommerce/6fa3c3fa-3979-4879-a713-ac03331ea54d_blog-post-1.jpg?auto=compress,format'
                        alt=''
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <h6>Mauris sollicitudin arcu vitae mollis finibus</h6>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec. Mauris sollicitudin arcu vitae mollis
                finibus. Fusce tincidunt nisi a lacus aliquam.
              </p>
              <div className='thumbnail-video'>
                {/* <img src='images/bg-dark.jpg' alt='' />
                <span className='btn-play'>
                  <i className='icon-play' />
                </span>
                <div
                  className='video-iframe'
                  data-url='https://www.youtube.com/watch?v=pa4_cuGMNdw'
                /> */}

                <iframe
                  width='100%'
                  height='415'
                  src='https://www.youtube.com/embed/tgbNymZ7vqY'
                ></iframe>
              </div>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec. Mauris sollicitudin arcu vitae mollis
                finibus. Fusce tincidunt nisi a lacus aliquam, vitae ultricies
                nisl ornare. Nulla tempor vel ex a condimentum. Cras a vulputate
                odio.
              </p>
              <h5>Nam quis aliquam ex</h5>
              <p>
                Praesent porta sem magna, vitae suscipit augue porttitor eget.
                Nam quis aliquam ex. Nunc lobortis sem sapien, in bibendum
                turpis accumsan nec. Mauris sollicitudin arcu vitae mollis
                finibus. Fusce tincidunt nisi a lacus aliquam, vitae ultricies
                nisl ornare. Nulla tempor vel ex a condimentum. Cras a vulputate
                odio.
              </p>
            </div>
          </div>
        </section>
        <section className='comment-customer'>
          <div className='wrapper'>
            <div className='row'>
              <img src='images/comments.jpg' alt='' />
            </div>
          </div>
        </section>
        <section className='form-contact line-bottom-left'>
          <div className='wrapper full-width'>
            <div className='row'>
              <div className='col-image'>
                <div className='image'>
                  <picture>
                    <source
                      media='(min-width: 768px)'
                      srcSet='images/bg-banner-white.jpg'
                    />
                    <source srcSet='images/bg-banner-white.jpg' />
                    <img
                      loading='lazy'
                      src='images/bg-banner-white.jpg'
                      alt=''
                    />
                  </picture>
                </div>
              </div>
              <div className='content'>
                <form>
                  <ul>
                    <li className='title'>
                      <div className='image'>
                        <picture>
                          <source
                            media='(min-width: 1024px)'
                            srcset='https://images.prismic.io/burgesscommerce/e5f9e545-8130-4067-91f7-031f769afc49_thumbnail-form-contact.png?auto=compress,format'
                          />
                          <source srcset='https://images.prismic.io/burgesscommerce/d1f28184-e40d-4da2-9c29-3a4e33986a57_thumbnail-form-contact-mobile.png?auto=compress,format' />
                          <img
                            loading='lazy'
                            src='https://images.prismic.io/burgesscommerce/d1f28184-e40d-4da2-9c29-3a4e33986a57_thumbnail-form-contact-mobile.png?auto=compress,format'
                            alt='owner'
                          />
                        </picture>
                      </div>
                      <h2>Let’s talk about how I can help you</h2>
                    </li>
                    <li className='input-js'>
                      <label>Your email address *</label>
                      <input
                        type='email'
                        name='contact[email]'
                        placeholder='Your email address *'
                        id='email'
                        className='required'
                        defaultValue
                        autoCorrect='off'
                        autoCapitalize='off'
                      />
                    </li>
                    <li className='input-js'>
                      <label>Your phone number</label>
                      <input
                        type='tel'
                        name='contact[number]'
                        placeholder='Your phone number'
                        id='phone'
                        defaultValue
                        autoCorrect='off'
                        autoCapitalize='off'
                      />
                    </li>
                    <li className='input-js'>
                      <label>Your name</label>
                      <input
                        type='text'
                        name='contact[name]'
                        placeholder='Your name'
                        id='name'
                        defaultValue
                        autoCorrect='off'
                        autoCapitalize='off'
                      />
                    </li>
                    <li className='input-js'>
                      <label>Your message</label>
                      <textarea
                        type='textarea'
                        name='contact[message]'
                        placeholder='Your message'
                        id='message'
                        autoCorrect='off'
                        autoCapitalize='off'
                      />
                    </li>
                    <li className>
                      <button
                        type='submit'
                        name='commit'
                        className='button secondary'
                      >
                        Let’s Talk
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
