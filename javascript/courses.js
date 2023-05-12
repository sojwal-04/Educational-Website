// LOAD COURSES
/*---------------------*/

const courses = [
    {
      id: 1,
      image: "./images/course1.jpg",
      title: "Responsive Social Media Webiste UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 2,
      image: "./images/course2.jpg",
      title: "Responsive Smartphone Webiste Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 3,
      image: "./images/course3.jpg",
      title: "Responsive Admin Dashboard UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 4,
      image: "./images/course4.jpg",
      title: "Responsive Social Media Webiste UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 5,
      image: "./images/course5.jpg",
      title: "Responsive Smartphone Webiste Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 6,
      image: "./images/course6.jpg",
      title: "Responsive Admin Dashboard UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 7,
      image: "./images/course7.jpg",
      title: "Responsive Social Media Webiste UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 8,
      image: "./images/course8.jpg",
      title: "Responsive Smartphone Webiste Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 9,
      image: "./images/course9.jpg",
      title: "Responsive Admin Dashboard UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
  
    {
      id: 10,
      image: "./images/course10.jpg",
      title: "Responsive Social Media Webiste UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 11,
      image: "./images/course11.jpg",
      title: "Responsive Smartphone Webiste Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 12,
      image: "./images/course12.jpg",
      title: "Responsive Admin Dashboard UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 13,
      image: "./images/course4.jpg",
      title: "Responsive Social Media Webiste UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 14,
      image: "./images/course14.jpg",
      title: "Responsive Smartphone Webiste Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 15,
      image: "./images/course15.jpg",
      title: "Responsive Admin Dashboard UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 16,
      image: "./images/course16.jpg",
      title: "Responsive Social Media Webiste UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 17,
      image: "./images/course17.jpg",
      title: "Responsive Smartphone Webiste Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
    {
      id: 18,
      image: "./images/course18.jpg",
      title: "Responsive Admin Dashboard UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic saepe officia nam. Voluptas, magnam totam.",
      link: "courses.html",
    },
  ];
  
  const coursesContainer = document.getElementById("courses-container");
  courses.forEach((course) => {
    const courseMarkup = `
        <article class="course">
          <div class="course__image">
            <img src="${course.image}" alt="" />
          </div>
          <div class="course__info">
            <h4>${course.title}</h4>
            <p>${course.description}</p>
            <a href="${course.link}" class="btn btn-primary">Learn More</a>
          </div>
        </article>
      `;
    coursesContainer.innerHTML += courseMarkup;
  });
  
  /*----------*/
  