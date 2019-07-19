const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/products', {useMongoClient: true})
.then( () => console.log('Connected to MongoDB'))
.catch( (err) => console.error('Not connected to MongoDB'));


  const familySchema = new Schema({
      name: String,
      img: String,
      desc: String
    });
    
  const Family = mongoose.model('family', familySchema)
    

  const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    img: String,
    reviews: Number,
    use: {name: String, img:String, desc: String},
    class: {name: String, img:String, desc: String},
    family: [familySchema],
    video: String,
    itemDesc: String,
    sizes: String,
    weight: String,
    activity: String,
    modelNum: String
  });
  
  const Product = mongoose.model('product', productSchema)
  
  
  
  
  ////////////////////////SEEEEEEEDS DATAAAAAAAAAA///////////////////////
  
  
  // var products = [
  //   new Product({
  //     name: 'Alpha Spout',
  //     description: 'Made for the toughest ramen eating. Whether it a Ramen eating competition or just for leisure on the weekends. This will protect you from the hottest noodle juice there is.',
  //     price: 449.95,
  //     img: "https://images.arcteryx.com/S19/350w/Atom-SL-Hoody-Tangent.jpg",
  //     reviews: 46,
  //     use: {name: "Trail-Running", img: "https://images.arcteryx.com/widget-images/icon-AR.jpg", desc: "For running through the mountains with weather happening"},
  //     class: {name: "Alpha", img: "https://images.arcteryx.com/widget-images/icon-AR.jpg", desc: "The highest durability against the elements"},
  //     family: [
  //       {name:"Not HeavyWeight", img:"https://images.arcteryx.com/widget-images/icon-LT.jpg", desc: "High performance, minimalist design that is durable for its weight."},
  //       {name: "Varied Weather", img: "https://images.arcteryx.com/widget-images/icon-MX.jpg", desc: "Highly durable, breathable and mobile. Best for mixed usage in changing weather conditions."},
  //       {name: "BoraBora", img: "https://images.arcteryx.com/widget-images/icon-bora.jpg", desc: "Multi-day trekking products that are durable and functional in mountain environments."}
  //     ],
  //     video: 'video goes here',
  //     itemDesc: 'Built for alpinists who move fast, the Alpha FL Jacket delivers hardwearing GORE-TEX Pro performance for a mere 315 grams. Made with a durable N40p-X face fabric, it is carefully constructed to optimize breathability by stacking the exterior and interior pockets. Every gram was carefully considered yet it provides exceptional freedom of movement and room for light layers. Helmet compatible StormHood™. Custom Cohaesive™ hem adjustments serve as HemLocks™ to prevent slippage under a harness.',
  //     sizes: 'XS, S, M, L, XL, XXL',
  //     weight: '315 g / 11.1 oz',
  //     activity: 'Rock Climbing / Ice Climbing / Alpine Climbing',
  //     modelNum: '18976'
  //   }), 
  //   new Product({
  //     name: 'Beta Protect',
  //     description: 'Unlike the other jackets, this is a lightweight, on-the-go emergency shell that uses helium tech.',
  //     price: 299.95,
  //     img: "https://images.arcteryx.com/S19/350w/Incendo-Hoody-Robotica.jpg",
  //     reviews: 46,
  //     use: {name: "Trail-Running", img: "https://images.arcteryx.com/widget-images/icon-AR.jpg", desc: "For running through the mountains with weather happening"},
  //     class: {name: "Alpha", img: "https://images.arcteryx.com/widget-images/icon-AR.jpg", desc: "The highest durability against the elements"},
  //     family: [
  //       // {name:"Not HeavyWeight", img:"https://images.arcteryx.com/widget-images/icon-LT.jpg", desc: "High performance, minimalist design that is durable for its weight."},
  //       // {name: "Varied Weather", img: "https://images.arcteryx.com/widget-images/icon-MX.jpg", desc: "Highly durable, breathable and mobile. Best for mixed usage in changing weather conditions."},
  //       {name: "BoraBora", img: "https://images.arcteryx.com/widget-images/icon-bora.jpg", desc: "Multi-day trekking products that are durable and functional in mountain environments."}
  //     ],
  //     video: 'video goes here',
  //     itemDesc: 'Built for alpinists who move fast, the Alpha FL Jacket delivers hardwearing GORE-TEX Pro performance for a mere 315 grams. Made with a durable N40p-X face fabric, it is carefully constructed to optimize breathability by stacking the exterior and interior pockets. Every gram was carefully considered yet it provides exceptional freedom of movement and room for light layers. Helmet compatible StormHood™. Custom Cohaesive™ hem adjustments serve as HemLocks™ to prevent slippage under a harness.',
  //     sizes: 'XS, S, M, L, XL, XXL',
  //     weight: '315 g / 11.1 oz',
  //     activity: 'Rock Climbing / Ice Climbing / Alpine Climbing',
  //     modelNum: '18976'
  //   }), 
  //   new Product({
  //     name: 'Photon Triad',
  //     description: 'For all the people in the world, this piece is sure to satisfy all your sweaty generalist needs',
  //     price: 974.95,
  //     img: "https://images.arcteryx.com/S19/350w/Stryka-Hoody-Phantom.jpg",
  //     reviews: 46,
  //     use: {name: "Trail-Running", img: "https://images.arcteryx.com/widget-images/icon-AR.jpg", desc: "For running through the mountains with weather happening"},
  //     class: {name: "Alpha", img: "https://images.arcteryx.com/widget-images/icon-AR.jpg", desc: "The highest durability against the elements"},
  //     family: [
  //       {name:"Not HeavyWeight", img:"https://images.arcteryx.com/widget-images/icon-LT.jpg", desc: "High performance, minimalist design that is durable for its weight."},
  //       // {name: "Varied Weather", img: "https://images.arcteryx.com/widget-images/icon-MX.jpg", desc: "Highly durable, breathable and mobile. Best for mixed usage in changing weather conditions."},
  //       {name: "BoraBora", img: "https://images.arcteryx.com/widget-images/icon-bora.jpg", desc: "Multi-day trekking products that are durable and functional in mountain environments."}
  //     ],
  //     video: 'video goes here',
  //     itemDesc: 'Built for alpinists who move fast, the Alpha FL Jacket delivers hardwearing GORE-TEX Pro performance for a mere 315 grams. Made with a durable N40p-X face fabric, it is carefully constructed to optimize breathability by stacking the exterior and interior pockets. Every gram was carefully considered yet it provides exceptional freedom of movement and room for light layers. Helmet compatible StormHood™. Custom Cohaesive™ hem adjustments serve as HemLocks™ to prevent slippage under a harness.',
  //     sizes: 'XS, S, M, L, XL, XXL',
  //     weight: '315 g / 11.1 oz',
  //     activity: 'Rock Climbing / Ice Climbing / Alpine Climbing',
  //     modelNum: '18976'
  //   }), 
  //   new Product({
  //     name: 'Mongolian Shield',
  //     description: 'If you like traveling to Mongolia, then make sure you you buy these pants. This is top of the line specifically made for walking in Mongolia.',
  //     price: 449.95,
  //     img: "https://images.arcteryx.com/S19/350w/Sigma-FL-Pant-Stellar.jpg",
  //     reviews: 46,
  //     use: {name: "Trail-Running", img: "https://images.arcteryx.com/widget-images/icon-AR.jpg", desc: "For running through the mountains with weather happening"},
  //     class: {name: "Alpha", img: "https://images.arcteryx.com/widget-images/icon-AR.jpg", desc: "The highest durability against the elements"},
  //     family: [
  //       // {name:"Not HeavyWeight", img:"https://images.arcteryx.com/widget-images/icon-LT.jpg", desc: "High performance, minimalist design that is durable for its weight."},
  //       {name: "Varied Weather", img: "https://images.arcteryx.com/widget-images/icon-MX.jpg", desc: "Highly durable, breathable and mobile. Best for mixed usage in changing weather conditions."},
  //       {name: "BoraBora", img: "https://images.arcteryx.com/widget-images/icon-bora.jpg", desc: "Multi-day trekking products that are durable and functional in mountain environments."}
  //     ],
  //     video: 'video goes here',
  //     itemDesc: 'Built for alpinists who move fast, the Alpha FL Jacket delivers hardwearing GORE-TEX Pro performance for a mere 315 grams. Made with a durable N40p-X face fabric, it is carefully constructed to optimize breathability by stacking the exterior and interior pockets. Every gram was carefully considered yet it provides exceptional freedom of movement and room for light layers. Helmet compatible StormHood™. Custom Cohaesive™ hem adjustments serve as HemLocks™ to prevent slippage under a harness.',
  //     sizes: 'XS, S, M, L, XL, XXL',
  //     weight: '315 g / 11.1 oz',
  //     activity: 'Rock Climbing / Ice Climbing / Alpine Climbing',
  //     modelNum: '18976'
  //   })];
    
    
  //   //////////////////////////WHAT SEEDS IT/////////////////////////////////
    
  //   var seedDB = () => {
  //     Product.create(products)
  //     .then( () => {
  //       console.log('Database seeded!');
  //       mongoose.connection.close();
  //     })
  //     .catch( err => console.error(err));
  //   }
    
  // seedDB();
    
    
    module.exports = Product;