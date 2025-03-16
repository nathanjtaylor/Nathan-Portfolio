
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

};