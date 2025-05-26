
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("projects");

  eleventyConfig.addShortcode("nav", function() { 
    return `<ul>
        <li><a href="/">home</a></li>
        <li><a href="/about/">about</a></li>
        <li><a href="/projects/">projects</a></li>
        <li><a href="/contact/">contact</a></li>
      </ul>`;
  });

    eleventyConfig.addShortcode("see_more_button", function(href) { 
    return `<button onclick="window.location.href='${href}';">See More
    <div class="see_more_image_box">
        <div class="default_image">
            <img class="button_eye_icon closed_eye"  alt="closed_eye" src="/images/closed-eye-icon.png"></img>
        </div>
        <div class="hover_image">
            <img class="button_eye_icon open_eye"  alt="open_eye" src="/images/open-eye-icon.png"></img>
        </div>
    </div>
  </button>`;
  });

}; 