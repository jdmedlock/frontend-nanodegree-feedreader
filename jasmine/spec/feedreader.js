/* feedreader.js
 *
 * This Jasmine spec file contains all of the tests necessary to validate
 * the operation of the feedreader application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });

        /* Loop through each feed in the allFeeds object and ensures it has
         * a URL defined and that the URL is not empty.
         */
        allFeeds.forEach((feed, feedIndex) => {
            it(`element #${feedIndex} should have a 'url' attribute`, () => {
                expect(feed.url).toBeDefined();
            });
            it(`element #${feedIndex} should have a nonblank 'url' attribute`, () => {
                expect(feed.url).not.toBe('');
            });
        });

        // Loop over each entry in the allFeeds array of objects and
        // and examine the 'url' key/value pair
        describe('validate allFeeds url key/value pairs -', () => {
            allFeeds.forEach((feed,feedIndex) => {
                it(`element #${feedIndex} should have a 'url' attribute`, () => {
                    expect(feed.url).toBeDefined();
                });
                it(`element #${feedIndex} should have a nonblank 'url' attribute`, () => {
                    expect(feed.url).not.toBe('');
                });
            });
        });

        /* Loop through each feed in the allFeeds object and ensures it has a
         * name defined and that the name is not empty.
         */
        describe('validate allFeeds name key/value pairs - ', () => {
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


    /* Tests to validate menu selection */
    describe('The menu', () => {
        /* Ensure that the menu element is hidden by default. Analyze the HTML
         * and the CSS to validate the hiding/showing of the menu element.
         */
        it('menu is hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Test that the menu changes visibility when the menu icon is
          * clicked. This test ensures that the menu displays when
          * clicked and is hidden when clicked again.
          */
        it('menu visibility toggles when clicked', () => {
            // Click when the menu is hidden. After the click the menu should
            // be visible to the user.
            $( ".menu-icon-link" ).trigger( "click" );
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // Click when the menu is visible. After the click the menu should
            // be hidden from the user
            $( ".menu-icon-link" ).trigger( "click" );
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* Validates that the feed is properly initialized */
    describe('Initial Entries', () => {

        /* Ensure that when the loadFeed function is called there is at least
         * a single .entry element within the .feed container. Since loadFeed()
         * is asynchronous it is required that the asmine beforeEach and
         * asynchronous done() function be used to ensure proper sequencing.
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
            feed = document.querySelector('.feed');
            const noEntries = feed.getElementsByClassName('entry').length;
            expect(noEntries).toBeGreaterThan(0);
            done();
        });
    });

    /* Validate that the when a new feed is loaded its content also changes */
    describe('New Feed Selection', () => {
        let feed0EntryLink = null;
        let feed1EntryLink = null;

        // Invoke the loadFeed(1) to load the CSS Tricks feed and wait for
        // it to complete.
        beforeEach(function(done) {
            loadFeed(0, () => {
                feed0EntryLink = document.querySelectorAll('.feed .entry-link');
            });
            loadFeed(1, () => {
                feed1EntryLink = document.querySelectorAll('.feed .entry-link');
                done();
            });
        });

        // When the feed has been loaded check to make sure its contents are
        // different from that of the previous feed.
        it('should populate the feed with a different set of contents', (done) => {
            expect(feed0EntryLink).not.toBe(null);
            expect(feed1EntryLink).not.toBe(null);
            expect(feed0EntryLink[0].innerHTML).not.toBe(feed1EntryLink[0].innerHTML);
            done();
        });
    });

}());

