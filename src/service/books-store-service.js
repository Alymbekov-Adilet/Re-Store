class BookstoreService {
  data = [
    {
      id: 1,
      title: "Jamila",
      author: "Chingiz Aitmatov",
      price: 32,
      coverImage:
        "https://imgv2-2-f.scribdassets.com/img/word_document/353997667/original/216x287/82667dd2a5/1579937682?v=1",
    },
    {
      id: 2,
      title: "Release It!",
      author: "Michael T. Nygard",
      price: 45,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("something bad happend"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}

export default BookstoreService;
