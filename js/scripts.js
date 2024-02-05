/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


$(document).ready(function () {
    $("#shareButton").click(function () {
      $("#sharePopup").toggle();
});

    // Close the popup when clicking outside of it
$(document).click(function (e) {
        if (!$(e.target).closest("#shareButton, #sharePopup").length) {
            $("#sharePopup").hide();
        }
    });

    // Prevent the popup from closing when clicking inside it
    $("#sharePopup").click(function (e) {
        e.stopPropagation();
    });

    // Add specific functionality for each social share button
    $("#facebookShare").click(function () {
        var url = encodeURIComponent('your-url');
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook-share-dialog', 'width=626,height=436');
    });

    $("#twitterShare").click(function () {
        var text = encodeURIComponent('your-text');
        var url = encodeURIComponent('your-url');
        window.open('https://twitter.com/intent/tweet?text=' + text + '&url=' + url, 'twitter-share-dialog', 'width=626,height=436');
    });

    $("#linkedinShare").click(function () {
        var url = encodeURIComponent('your-url');
        var title = encodeURIComponent('your-title'); // Add a title parameter if needed
        window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title, 'linkedin-share-dialog', 'width=626,height=436');
    });


    $("#copyLink").click(function () {
        var shareableLink = document.getElementById("shareableLink");
        navigator.clipboard.writeText(shareableLink.value)
          .then(function () {
            alert("Link copied to clipboard!");
          })
          .catch(function (err) {
            console.error('Unable to copy text to clipboard', err);
          });
      });

    // Add more click event handlers for additional social platforms
});



