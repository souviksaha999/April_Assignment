import React from 'react'

export default function Home() {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.zdnet.com/a/img/resize/0a6b0be2f543ddbf313fc83a706b807b77c3c202/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=900&width=1200" class="d-block w-100" alt="aaaaa"  height= "500px"/>
    </div>
    <div class="carousel-item">
      <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/computer_programming.jpeg.jpg" class="d-block w-100" alt="..." height= "500px" />
    </div>
    <div class="carousel-item">
      <img src="https://media.licdn.com/dms/image/D5612AQFsiU2-IknUhQ/article-cover_image-shrink_720_1280/0/1703065379624?e=2147483647&v=beta&t=SepcGfg02177G117Q0eRJv97AZWjoJHf-YDZy4gS_2Q" class="d-block w-100" alt="..." height="500px" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
    </>
  )
}
