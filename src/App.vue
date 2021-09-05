<template>
  <div>
        <header>
            <!-- header -->
            <div1 class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 id="titleId">ONLINE INTERIOR DESIGN</h2>
                    </div>
                </div>
            </div1>
            <!-- header-buttons -->
            <nav class="navbar navbar-light bg-light">
                <form class="container-fluid justify-content-start">
                  <button class="btn btn-outline-success me-2 header1Btn" type="button">Home</button>
                  <button class="btn btn-outline-success me-2 header1Btn" type="button">Projects</button>
                  <button class="btn btn-outline-success me-2 header1Btn" type="button">Contact</button>
                  
                  
                  <button class="btn btn-sm btn-outline-secondary header2Btn" type="button">Login</button>

                  <button class="btn btn-sm btn-outline-secondary header3Btn" type="button">Signin</button>
                
    </form>
              </nav>
        </header>
        <!-- main picture -->
        <section 1>
            <div3 class="container-fluid">
                <div3/1 class=" col col-lg-12 col-md-12 col-sm-12"></div>
                <img
                    src="./simple-html-files/images/06.jpg"
                    alt="livingRoom"
                    height="700"
                    width="100%"
                />

                <button id="findBtn" type="button" class="btn-outline-danger">
                    Find Your Style
                </button>
            </div3>
        </section 1>
        <section 2 >
        <div class="container-fluid" id="secondSection" >
                <div1  class="row featurette">
                    <div1.1 class="col-8 col-md-7 order-md-2">
                           <p id="hugId" style="margin-top: 10px; text-align: center;">
                            
                                 "Hug your Dream Home"
                            <br>
                            “just give your idea"
                            <br>
                             "we can translate your pins into a 
                            perfectly decorated rooms in your home”
                            </p>
                    </div1.1>
                    <div1.2 class="col-4 order-md-1">
                        <img  
                        src="../../resources/images/singleSofa1.jpg" 
                        height="400" width="300">
                    </div1.2>
                </div1>
                </div>   
        </section 2>

        <section3>

            <div3 class="container-fluid">
                <div3/1 class=" col col-lg-12 col-md-12 col-sm-12"></div>
                <img id="thirdsSectionimg"
                    src="../../resources/images/livingroom4.jpg"
                    alt="livingRoom"
                    height="600"
                    width="100%"
                />
                <div class="top-right">Top Right</div>

            </div3>

        </section 3>

        <section4>
            <div class="container-fluid" id="thirdSection" >
                <div1  class="row featurette">

                    <div1.3 class="col-4 order-md-1">
                        
                        <a class="btn btn-secondary circleButton" href="#"> Tell us what you need.</a>
                        <a class="btn btn-secondary mainButton" href="#">View  </a>

                    </div1.3><div1.3 class="col-4 order-md-2">
                        
                        <a class="btn btn-secondary circleButton" href="#">See your ideas performed.</a>
                        <a class="btn btn-secondary mainButton" href="#">View  </a>

                    </div1.3>
                    <div1.3 class="col-4 order-md-3">
                        
                        <a class="btn btn-secondary circleButton" href="#">Get the treatment.</a>
                        <a class="btn btn-secondary mainButton" href="#">View  </a>

                    </div1.3>
                </div1>
                </div>
</section4>


    <section 5 >
        <div class="container-fluid" id="fifthSectionId" >
                <div1  class="row featurette">
                    <div1.1 class="col-8 col-md-7 order-md-2">
                           <p id="guarantyId" style="">
                            
                Our clients know how simple the process is.
                            </p>
                            <form action="/form/submit" method="POST">
                                <textarea class="comment">Type your comment here.</textarea>
                                <br>
                                <input id="submitButtonId" type="submit" name="submit" value="Send">
                              </form>
                    </div1.1>
                    <div1.2 class="col-4 order-md-1">
                        <img  
                        src="../../resources/images/singleSofa1.jpg" 
                        height="400" width="300">
                    </div1.2>
                </div1>
                </div>   
        </section 5>



        <main>
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators"></div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <svg
                            class="bd-placeholder-img"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        ></svg>
                    </div>
                    <div class="carousel-item">
                        <svg
                            class="bd-placeholder-img"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                        </svg>

                        <div class="container">
                            <div class="carousel-caption">
                                <p>
                                    Some representative placeholder content for
                                    the second slide of the carousel.
                                </p>
                                <p>
                                    <a class="btn btn-lg btn-primary" href="#"
                                        >Learn more</a
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <svg
                            class="bd-placeholder-img"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <rect width="100%" height="100%" fill="#777" />
                        </svg>

                        <div class="container">
                            <div class="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>
                                    Some representative placeholder content for
                                    the third slide of this carousel.
                                </p>
                                <p>
                                    <a class="btn btn-lg btn-primary" href="#"
                                        >Browse gallery</a
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Marketing messaging and featurettes
  ================================================== -->
            <!-- Wrap the rest of the page in another container to center all the content. -->

            <div class="container marketing">
                <!-- Three columns of text below the carousel -->
                <div class="row">
                    <div class="col-lg-4">
                        <svg
                            class="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">
                                140x140
                            </text>
                        </svg>

                        <h2>Heading</h2>
                        <p>
                            Some representative placeholder content for the
                            three columns of text below the carousel. This is
                            the first column.
                        </p>
                        <p>
                            <a class="btn btn-secondary" href="#"
                                >View details &raquo;</a
                            >
                        </p>
                    </div>
                    <!-- /.col-lg-4 -->
                    <div class="col-lg-4">
                        <svg
                            class="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">
                                140x140
                            </text>
                        </svg>

                        <h2>Heading</h2>
                        <p>
                            Another exciting bit of representative placeholder
                            content. This time, we've moved on to the second
                            column.
                        </p>
                        <p>
                            <a class="btn btn-secondary" href="#"
                                >View details &raquo;</a
                            >
                        </p>
                    </div>
                    <!-- /.col-lg-4 -->
                    <div class="col-lg-4">
                        <svg
                            class="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">
                                140x140
                            </text>
                        </svg>

                        <h2>Heading</h2>
                        <p>
                            And lastly this, the third column of representative
                            placeholder content.
                        </p>
                        <p>
                            <a class="btn btn-secondary" href="#"
                                >View details &raquo;</a
                            >
                        </p>
                    </div>
                    <!-- /.col-lg-4 -->
                </div>
                <!-- /.row -->

                <!-- START THE FEATURETTES -->

                <hr class="featurette-divider" />


                    <div class="col-md-5">
                        <svg
                            class="
                                bd-placeholder-img bd-placeholder-img-lg
                                featurette-image
                                img-fluid
                                mx-auto
                            "
                            width="500"
                            height="500"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: 500x500"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#eee" />
                            <text x="50%" y="50%" fill="#aaa" dy=".3em">
                                500x500
                            </text>
                        </svg>
                    </div>
                </div>

                <hr class="featurette-divider" />

                <!-- /END THE FEATURETTES -->
            </div>
            <!-- /.container -->

            <!-- FOOTER -->
            <footer class="container">
                <p class="float-end"><a href="#">Back to top</a></p>
                <p>
                    &copy; 2017–2021 Company, Inc. &middot;
                    <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
                </p>
            </footer>
        </main></div>
</template>

<script>
export default{};
</script>
