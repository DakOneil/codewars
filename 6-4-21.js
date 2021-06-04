// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
    //your code here
    if (url.includes('www')) {
      return url.split('.')[1]
    } else if (url.includes('//')) {
      return url.split('//')[1].split('.')[0]
    } else {
      return url.split('.')[0]
    }
  }



  // Regexp Basics - is it a digit?

  // Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

  String.prototype.digit = function() {
    return /[\d]{1}/.test(this) && !/[a-z]/.test(this) && this.length ==1
  };




  