import { Component } from '@angular/core';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public history1 : string = "Our Bonsai shop has a rich and fascinating history that spans several generations."
  public history2 : string = "It all began over 50 years ago, when our founder, Mr. Tanaka, first discovered his love for Bonsai trees. Growing up in Japan, he was captivated by the art and beauty of these miniature trees, and he spent countless hours studying and practicing the techniques of Bonsai cultivation. In the early 1970s, Mr. Tanaka moved to the United States and opened his first Bonsai shop in the heart of the city. It was a small and modest store, but it quickly became a haven for Bonsai enthusiasts from all over the region."
  public history3 : string = "Mr. Tanaka's passion for Bonsai was contagious, and he soon developed a loyal following of customers who shared his love for this ancient Japanese tradition. Over the years, the shop grew and expanded, and Mr. Tanaka's son, Hiroshi, joined the family business. Together, they continued to cultivate and care for their Bonsai trees, and to share their knowledge and expertise with others. Hiroshi brought new ideas and innovations to the shop, introducing new varieties of Bonsai trees and expanding the range of accessories and tools."
  public history4 : string = "Today, our Bonsai shop is a thriving and vibrant community of Bonsai enthusiasts, with a wide range of trees and accessories to choose from, as well as classes and workshops for beginners and advanced practitioners alike. We continue to honor the legacy of Mr. Tanaka, who passed away in 2012, by staying true to the principles of Bonsai cultivation that he instilled in us. We believe that our history and tradition are an integral part of who we are as a Bonsai shop, and we are committed to preserving and sharing this legacy with future generations.";
  public p1 : string = "Whether you are an experienced collector or new to the world of Bonsai, our shop offers a range of trees to suit your style and preferences.";
  public p2 : string = "We have a wide selection of species, which includes the classic favourites such as the Japanese maple and juniper, as well as lesser-known varieties, which offer a unique and striking aesthetic. Our Bonsai trees are not only beautiful, but also represent a symbol of harmony, peace, and balance: each tree is unique, with its own distinctive shape, color, and character, and has been meticulously tended to by our team of skilled and knowledgeable Bonsai artists.";
  public p3 : string = "Besides Bonsais, we also offer a range of accessories, including pots, tools, and soil, to help you care for your Bonsai and keep it healthy and vibrant for years to come. To whomever might be interested, we provide a range of workshops and classes to help people learn about the art of Bonsai and to develop their own skills and techniques. In fact, our goal is not just to sell Bonsai trees but to foster a deeper appreciation and understanding of this ancient art form.";
  public h2 : string = "'We take pride in our commitment to quality, and every tree we sell is carefully inspected to ensure that it meets our high standards of excellence.'";
  public h22 : string = "At our Bonsai shop, we believe that the beauty and serenity of these miniature trees can have a positive impact on your life, and we are dedicated to helping you find the perfect tree to enhance your space and create a peaceful atmosphere. We invite you to explore our selection and discover the magic of Bonsai for yourself.";

  public date = new Date();
}
