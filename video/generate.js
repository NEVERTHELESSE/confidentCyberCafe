for (let i = 1; i < 600; i++) {
  console.log(`
    {
    id: ${i},
    video_url: "/videos/video${i}.jpg",
    title:
      "How to create a website using HTML & Css |  Step-by-Step without any other library",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, cumque nemo itaque, doloremque vero sapiente accusantium quidem sed, molestias quisquam deleniti asperiores? Doloribus atque adipisci architecto sequi non necessitatibus accusantium temporibus commodi ipsa illo! Pariatur quasi voluptate voluptas, ex quo obcaecati ipsam omnis? Nemo itaque odit explicabo maiores cum a?",
    user: {
      profile_pics: "/users/user${i}.jpg",
      full_name: "FreeCodeCamp",
      views: 345,
      date: "02-01-2015",
      like: 300,
      share: 300,
      like: 200,
      
  }},`);
}
