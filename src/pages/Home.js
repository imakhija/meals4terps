import React from 'react';

function Home() {
  return (
    <div class="container text-start">
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Welcome to Meals4Terps</h1>
                <p class="col-md-8 fs-4">Create healthy, balanced meals at the University of Maryland dining halls tailored to your nutritional goals</p>
            </div>
        </div>

        <div class="row align-items-md-stretch">
            <div class="col-md-6">
                <div class="h-100 p-5 text-bg-dark rounded-3">
                <h2>Change the background</h2>
                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                <button class="btn btn-outline-light" type="button">Example button</button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>Add borders</h2>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                <button class="btn btn-outline-secondary" type="button">Example button</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;