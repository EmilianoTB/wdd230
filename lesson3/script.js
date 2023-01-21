/* 
this search 
for the current 
year id in the html
*/
let currentYear = new Date().getFullYear();
let currentYearElement = document.getElementById("currentYear");
/* 
uses the object Date 
to obtain year 
but we just need the year 
that's why I use getFullYear()
*/

currentYearElement.innerHTML = currentYear;
 

/* last modified */

let LastModif = new Date(document.lastModified);
console.log(LastModif)
let lastModificationTime = document.getElementById("lastModified");
 
lastModificationTime.innerHTML = LastModif;



const changeFontTitle = document.querySelector(".changeFontTitle");
const mq2 = window.matchMedia("(min-width: 768px) and (max-width: 1245px)");
const mq1 = window.matchMedia("(min-width: 1245px)");

if (mq1.matches) {
    changeFontTitle.innerHTML = "60 px";
  } else if (mq2.matches) {
    changeFontTitle.innerHTML = "40 px";
  } else {
    changeFontTitle.innerHTML = "25 px";
  }
  
  mq1.addEventListener("change", (event) => {
    if (event.matches) {
      changeFontTitle.innerHTML = "60 px";
    }
  });
  
  mq2.addEventListener("change", (event) => {
    if (event.matches) {
      changeFontTitle.innerHTML = "40 px";
    }
  });
  
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      changeFontTitle.innerHTML = "25 px";
    }
  });

const changePrimaryNavigation = document.querySelector(".primaryNavigation");
  
  if (mq1.matches) {
      changePrimaryNavigation.innerHTML = "50 px";
    } else if (mq2.matches) {
      changePrimaryNavigation.innerHTML = "35 px";
    } else {
      changePrimaryNavigation.innerHTML = "23 px";
    }
    
    mq1.addEventListener("change", (event) => {
      if (event.matches) {
        changePrimaryNavigation.innerHTML = "50 px";
      }
    });
    
    mq2.addEventListener("change", (event) => {
      if (event.matches) {
        changePrimaryNavigation.innerHTML = "35 px";
      }
    });
    
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        changePrimaryNavigation.innerHTML = "23 px";
      }
    });

const changeFooterNavigation = document.querySelector(".footerNavigation");
  
  if (mq1.matches) {
      changeFooterNavigation.innerHTML = "50 px";
    } else if (mq2.matches) {
      changeFooterNavigation.innerHTML = "35 px";
    } else {
      changeFooterNavigation.innerHTML = "23 px";
    }
    
    mq1.addEventListener("change", (event) => {
      if (event.matches) {
        changeFooterNavigation.innerHTML = "50 px";
      }
    });
    
    mq2.addEventListener("change", (event) => {
      if (event.matches) {
        changeFooterNavigation.innerHTML = "35 px";
      }
    });
    
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        changeFooterNavigation.innerHTML = "23 px";
      }
    });

const changeHeadingOne = document.querySelector(".heading-1");
  
    if (mq1.matches) {
        changeHeadingOne.innerHTML = "40 px";
      } else if (mq2.matches) {
        changeHeadingOne.innerHTML = "30 px";
      } else {
        changeHeadingOne.innerHTML = "25 px";
      }
      
      mq1.addEventListener("change", (event) => {
        if (event.matches) {
          changeHeadingOne.innerHTML = "40 px";
        }
      });
      
      mq2.addEventListener("change", (event) => {
        if (event.matches) {
          changeHeadingOne.innerHTML = "30 px";
        }
      });
      
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          changeHeadingOne.innerHTML = "25 px";
        }
      });

const changeHeadingTwo = document.querySelector(".heading-2");
  
      if (mq1.matches) {
          changeHeadingTwo.innerHTML = "36 px";
        } else if (mq2.matches) {
          changeHeadingTwo.innerHTML = "25 px";
        } else {
          changeHeadingTwo.innerHTML = "20 px";
        }
        
        mq1.addEventListener("change", (event) => {
          if (event.matches) {
            changeHeadingTwo.innerHTML = "36 px";
          }
        });
        
        mq2.addEventListener("change", (event) => {
          if (event.matches) {
            changeHeadingTwo.innerHTML = "25 px";
          }
        });
        
        window.addEventListener("resize", () => {
          if (window.innerWidth < 768) {
            changeHeadingTwo.innerHTML = "20 px";
          }
        });

const changeHeadingThree = document.querySelector(".heading-3");
  
      if (mq1.matches) {
          changeHeadingThree.innerHTML = "35 px";
        } else if (mq2.matches) {
          changeHeadingThree.innerHTML = "23 px";
        } else {
          changeHeadingThree.innerHTML = "18 px";
        }
        
        mq1.addEventListener("change", (event) => {
          if (event.matches) {
            changeHeadingThree.innerHTML = "35 px";
          }
        });
        
        mq2.addEventListener("change", (event) => {
          if (event.matches) {
            changeHeadingThree.innerHTML = "23 px";
          }
        });
        
        window.addEventListener("resize", () => {
          if (window.innerWidth < 768) {
            changeHeadingThree.innerHTML = "18 px";
          }
        });

const changeParagraphText = document.querySelector(".paragraphText");
  
      if (mq1.matches) {
          changeParagraphText.innerHTML = "35 px";
        } else if (mq2.matches) {
          changeParagraphText.innerHTML = "23 px";
        } else {
          changeParagraphText.innerHTML = "18 px";
        }
        
        mq1.addEventListener("change", (event) => {
          if (event.matches) {
            changeParagraphText.innerHTML = "35 px";
          }
        });
        
        mq2.addEventListener("change", (event) => {
          if (event.matches) {
            changeParagraphText.innerHTML = "23 px";
          }
        });
        
        window.addEventListener("resize", () => {
          if (window.innerWidth < 768) {
            changeParagraphText.innerHTML = "18 px";
          }
        });
