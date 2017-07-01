const PARENT_QUOTES = [
  {
    contents: "I think the site is great. . . . I review the kids marks regularly as it is a great way to keep on top of things. I wished all the teachers used it.",
    author: "Ryan and Barb"
  },
  {
    contents: "I find this a much better system . . . to be able to look at any time at his progress and to be able to get a hold of you through email, makes my life so much easier and feel I am still able to be productive part of his education without constantly nagging him.",
    author: "Theresa and Mike"
  },
  {
    contents: "I think receiving information online is terrific",
    author: "Shari"
  },
  {
    contents: "I love receiving Jordan's marks/interims via email . . . This helps keep him accountable for his work and allows me to see how he is doing at times other than report cards.",
    author: "Doug"
  }
]

const TEACHER_QUOTES = [ 
  {
    contents: "This program is brilliant, students and parents can have regular access to marks which makes the life of the teacher much easier (fewer phone calls home, etc.) It's really easy to use. Teachers can access it from any computer.",
    author: "Soraya"
  },
  {
    contents: "Your program has had an enormous impact at our school. We appreciate everything you are doing with it and sharing it with our school.",
    author: "Rob"
  },
  {
    contents: "The parents love this program. I have had lots of positive feedback on the increase in student accountability.",
    author: "Bruce"
  }

]


new Vue({
  el: '.info__section--feedback',
  data: {
    teacherQuotes: TEACHER_QUOTES,
    parentQuotes: PARENT_QUOTES
  }
})