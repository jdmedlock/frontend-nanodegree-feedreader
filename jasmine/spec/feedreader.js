/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        allFeeds.forEach((feed,feedIndex) => {
            it(`element #${feedIndex} should have a 'url' attribute`, () => {
                expect(feed.url).toBeDefined();
            });
            it(`element #${feedIndex} should have a nonblank 'url' attribute`, () => {
                expect(feed.url).not.toBe('');
            });
        });
        describe('validate allFeeds url key/value pairs -', () => {
            // Loop over each entry in the allFeeds array of objects and
            // and examine the 'url' key/value pair
            allFeeds.forEach((feed,feedIndex) => {
                it(`element #${feedIndex} should have a 'url' attribute`, () => {
                    expect(feed.url).toBeDefined();
                });
                it(`element #${feedIndex} should have a nonblank 'url' attribute`, () => {
                    expect(feed.url).not.toBe('');
                });
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        describe('validate allFeeds name key/value pairs - ', () => {
            // Loop over each entry in the allFeeds array of objects and
            // and examine the 'name' key/value pair
            allFeeds.forEach((feed,feedIndex) => {
                 it(`element #${feedIndex} should have a 'name' attribute`, () => {
                     expect(feed.name).toBeDefined();
                 });
                 it(`element #${feedIndex} should have a nonblank 'name' attribute`, () => {
                     expect(feed.name).not.toBe('');
                 });
             });
         });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', () => {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu is hidden by default', () => {
            bodyClassValue = document.getElementsByTagName('body')[0]
                .getAttribute('class');
            expect(bodyClassValue).toBe('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu visibility toggles when clicked', () => {
            // Click when the menu is hidden. After the click the menu should
            // be visible to the user.
            $( ".menu-icon-link" ).trigger( "click" );
            bodyClassValue = document.getElementsByTagName('body')[0]
                .getAttribute('class');
            expect(bodyClassValue).not.toBe('menu-hidden');

            // Click when the menu is visible. After the click the menu should
            // be hidden from the user
            $( ".menu-icon-link" ).trigger( "click" );
            bodyClassValue = document.getElementsByTagName('body')[0]
                .getAttribute('class');
            expect(bodyClassValue).toBe('menu-hidden');
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

    let feed0EntryLink = null;

    describe('Initial Entries', () => {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        // Invoke the loadFeed(0) to load the Udacity Blog feed and wait for
        // it to complete. 
        let feed = null;
        beforeEach(function(done) {
            loadFeed(0, () => {
                done();
            });
        });

        // When the feed has been loaded check to make sure it has at least
        // one .entry element.
        it('should have at least one .entry element', (done) => {
            feed0EntryLink = document.querySelectorAll('.feed .entry-link');
            feed = document.querySelector('.feed');
            const noEntries = feed.getElementsByClassName('entry').length;
            expect(noEntries).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // Invoke the loadFeed(1) to load the CSS Tricks feed and wait for
        // it to complete. 
        beforeEach(function(done) {
            loadFeed(1, () => {
                done();
            });
        });

        // When the feed has been loaded check to make sure its contents are
        // different from that of the previous feed.
        it('should populate the feed with a different set of contents', (done) => {
            const feed1EntryLink = document.querySelectorAll('.feed .entry-link');
            expect(feed0EntryLink).not.toBe(feed1EntryLink);
            done();
        });
    });

}());

