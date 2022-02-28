// git add -A
// git commit -m "editing sponsors"
// git push origin master

// npm start

const sponsors = [
  {
    link: "https://www.poshpuppyboutique.com?sca_ref=1237600.asXdCJaMoQ",
    label: "PoshPuppy Boutique: 35% off",
    code: "CHIFFON",
    subtitle: "One stop shop with clothing, accessories and more",
    tags: [
      "Dog",
      "Clothing",
      "Toys",
      "Hairbows",
      "Bandanas",
      "Walk Accessories",
    ],
  },
  {
    link: "https://www.rifrufqueens.com/?ref=ng9-sipe4wz",
    label: "RifRufQueens: 15% off",
    code: "CHIFFON15",
    subtitle: "My favorite dog sneakers",
    tags: ["Dog", "Shoes"],
  },
  //{   link: "https://rifruf-the-sneaker-your-dog.kckb.st/b82f977d",
  //label: "RifRufQueens: Kickstarter Campaign",
  //subtitle: "Pledge to get first access new colorways & styles of dog sneakers!",
  //},
  {
    link: "https://dogbabycollection.com/",
    label: "Dog Baby Collection: 20% off",
    code: "CHIFFON20",
    subtitle: "Dog clothing, accessories, toys, beds and more!",
    tags: [
      "Dog",
      "Dog Mom/Dad",
      "Toys",
      "Clothing",
      "Walk Accessories",
      "Dog Beds",
    ],
  },
  {
    link: "https://dogcrushboutique.com/discount/CHIFFON",
    label: "Dog Crush Boutique: 15% off",
    code: "CHIFFON",
    subtitle: "Dog clothing, accessories, and more",
    tags: ["Dog", "Clothing", "Walk Accessories", "Dog Mom/Dad", "Human"],
  },
  {
    link: "https://www.liketoknow.it/ChiffonTheMaltipoo",
    label: "Like to Know it",
    code: null,
    subtitle:
      "Shop directly from my photos! Some of my favorite clothes and toys!",
    tags: ["Dog", "Human", "Clothing", "Walk Accessories", "Home", "Toys"],
  },
  {
    link: "http://amazon.com/shop/chiffonthemaltipoo",
    label: "Amazon Store",
    code: null,
    subtitle:
      " Check out my favorite items on Amazon! (Paid Link) As an Amazon Associate, I earn from qualifying purchases.",
    tags: ["Dog", "Clothing", "Walk Accessories", "Toys", "Home"],
  },

  //{
  //  link: "https://barkleywear.com/?ref=ng9-sipe4wz",
  //  label: "Barkley Wear: 10% off",
  //  code: "CHIFFON",
  //  subtitle: "Stylish dog clothing",
  //},
  {
    link: "http://Pinktailco.com/discount/CHIFFON10",
    label: "PinkTailCo: 10% off",
    code: "CHIFFON10",
    subtitle:
      "Walk accessories (harnesses, leashes, collars), bows and bandanas",
    tags: ["Walk Accessories", "Bandanas", "Hairbows"],
  },
  // {
  //   link: "https://www.brklz.com//?ref=bb-xz32gw",
  //   label: "BRKLZ: 20% off",
  //   code: "CHIF",
  //   subtitle: "Collars, leashes, letter charm name tags",
  //   tags: ["Pet", "Dog Tags", "Human", "Dog Mom/Dad", "Walk Accessories"],
  // },
  // {
  //   link: "http://www.browze.com/?utm_source=brandbassador&utm_medium=affiliate&ref=bb-xz32gw",
  //   label: "Browze: 50% off first order or 25% off with code",
  //   code: "BCREWCHIFFON",
  //   subtitle: "Home, kitchen, all kinds of supplies for humans and  pets!",
  //   tags: ["Pet", "Home", "Human"],
  //  },
  {
    link: "https://www.blueberrypet.com/?ref=ng9-sipe4wz",
    label: "Blueberry Pet: 10% off",
    code: "CHIFFON10",
    subtitle: "Harnesses, harness dresses, collars, leashes and clothes",
    tags: ["Pet", "Clothing", "Walk Accessories"],
  },
  {
    link: "https://www.giftspawt.com/?ref=chiffon",
    label: "Giftspawt: 10% off",
    code: "CHIFFON10",
    subtitle: "Toys, gift sets and more",
    tags: ["Pet", "Toys", "Dog Mom/Dad"],
  },
  {
    link: "http://i.refs.cc/k9Il2ZvM?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjo3MjE1OTYyMzl9",
    label: "Unique Opal Co: $5 off coupon; 10% off with code",
    code: "CHIFFON10",
    subtitle: "Custom tutus, dog bandanas and hoodies",
    tags: ["Pet", "Clothing", "Bandanas"],
  },
  {
    link: "https://www.parisianpet.com/?Click=6069",
    label: "Parisian Pet: 10% off",
    code: "CHIFFON10",
    subtitle: "Pet clothing (Tees, dresses, sleepwear and more)",
    tags: ["Pet", "Walk Accessories", "Clothing"],
  },
  //{
  //  link: "https://www.etsy.com/shop/ruaillebuailleco",
  //  label: "Ruaille Buaille Co: 10% off",
  //  code: "CHIFFON",
  //  subtitle: "Handmade Flower Crowns and other creations",
  //},
  //{
  //  link: "https://wowwowpetz.com/",
  //  label: "Wow Wow Petz: 25% off",
  //  code: "CHIFFON25",
  //  subtitle: "Pet apparel",
  //},
  {
    link: "https://www.etsy.com/shop/Mariposandco",
    label: "Mariposa & Co: 10% off",
    code: "CHIFFON",
    subtitle: "Hairbows, sailor bows and bandanas",
    tags: ["Pet", "Hairbows", "Sailorbows", "Bandanas"],
  },
  {
    link: "https://max-bone.bop8.net/kn5Wz",
    label: "Max-Bone: 15% off",
    code: "CHIFFON15",
    subtitle: "Stylish outerwear, walk accessories, food and more",
    tags: ["Pet", "Clothing", "Walk Accessories", "Food", "Carriers"],
  },
  {
    link: "http://i.refs.cc/3jn5PukK?smile_ref=http://i.refs.cc/3jn5PukK?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjo0MTMxODczOTl9",
    label: "Lucy & Co.: $5 off coupon; 15% off with code",
    code: "LCCHIFF15",
    subtitle: "Outerwear, walk accessories, and more",
    tags: [
      "Pet",
      "Clothing",
      "Human",
      "Bandanas",
      "Walk Accessories",
      "Dog Mom/Dad",
    ],
  },
  {
    link: "https://www.sassywoof.com/",
    label: "Sassy Woof: 20% off",
    code: "CHIFFON",
    subtitle: "Walk accessories, outerwear, dog parent apparel and accessories",
    tags: ["Pet", "Clothing", "Walk Accessories", "Bandanas", "Dog Mom/Dad"],
  },
  {
    link: "https://prf.hn/click/camref:1101ljdjJ/creativeref:1101l62969",
    label: "Honest Kitchen: 15% off with code",
    code: "CHIFFON15",
    subtitle: "Dog food and treats",
    tags: ["Pet", "Food", "Treats"],
  },
  //{
  //link: "https://www.etsy.com/shop/MissSophieBowtique",
  //label: "Miss Sophie Bowtique: 15% off",
  //code: "CHIFFON15",
  //subtitle : "Handmade clothing, harness dresses and accessories",
  //},

  //{
  //  link: "https://www.thehappyhowl.com/?ref=chiffon",
  //  label: "Happy Howl",
  //  code: null,
  //  subtitle: "Wholesome ingredient dog food",
  //},
  {
    link: "https://shareasale.com/r.cfm?b=1505106&u=2634834&m=95444&urllink=&afftrack= ",
    label: "Patchwork Pet",
    code: null,
    subtitle: "Toys",
    tags: ["Pet", "Toys"],
  },
  //{
  //link: "https://shareasale.com/r.cfm?b=1665965&u=2634834&m=103400&urllink=&afftrack= ",
  //label: "K9 Wear",
  // code: null,
  // subtitle: "Harness outfits",
  //},
  {
    link: "http://i.refs.cc/4AcWbcPu?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjo2MjY0NDQ4Mjh9",
    label: "Rebel Dawg: $15 off coupon",
    code: null,
    subtitle: "Stylish tags",
    tags: ["Pet", "Dog Tags"],
  },
  //{
  //link: "https://pawstanfurballs.com?Pawstapack=2PBMJ4AIE2",
  //label: "Pawsta N Furballs: 20% off",
  //code: "CHIFFON20",
  //subtitle: "Dog tutus and bandanas",
  //},
  {
    link: "https://www.yesstyle.com/en/home.html?rco=CHIFFON",
    label: "YesStyle",
    code: "CHIFFON",
    subtitle: "Dog clothing and accessories",
    tags: ["Human", "Pet", "Clothing"],
  },
  {
    link: "https://star.aliexpress.com/share/share.htm?redirectUrl=https%3A%2F%2Fsale.aliexpress.com%2Freferral_register_success.htm%3FinvitationCode%3DK0I5RzQ4akJ5QzNoV2ViMmpnamF4dkJoK3pQTG1jbmtLODBQVDcyQk45Y0ZWR0phL0VQb1dnPT0%26invitationScenario%3DsocialFission%26mb%3Do5ewodaxoQRG8pX%26srcSns%3DCopy%26tid%3Dold_bring_x_101%26businessType%3DsocialFission&image=H78836f65c5ce470ab86e4b5c8a2b42ad5.jpg&businessType=socialFission&templateId=old_bring_x_101&title=GREAT%20NEWS!%20UP%20TO%20US%20%2424%20IN%20COUPONS!",
    label: "Aliexpress: $24 in coupons",
    code: "INAZ9RUS",
    subtitle: "Dog clothing and accessories",
    tags: ["Human", "Pet", "Clothing"],
  },
  {
    link: "https://glnk.io/k33o/chiffonthemaltipoo",
    label: "Allbirds: Free underwear with $125 purchase",
    code: null,
    subtitle:
      "Offer automatically applied at checkout if underwear is added to your cart, you won't find this deal anywhere else!",
    tags: ["Human", "Shoes", "Clothing"],
  },
  {
    link: "www.tentree.com?utm_source=brandbassador&utm_medium=ambassador&ref=bb-xz32gw",
    label: "Tentree: 15% off; Ask me for current code",
    code: "TBCHIFFON4",
    subtitle: "Sustainable, 100% organic cotton human clothing",
    tags: ["Human", "Clothing"],
  },
  {
    link: "https://www.gopjn.com/t/SENKTEdLTUZDSEpOSktKQ0hJRkhPRw",
    label: "100 Percent Pure: Free shipping on 50+",
    code: null,
    subtitle: "Makeup with pure, natural ingredients",
    tags: ["Human", "Makeup"],
  },
  {
    link: "giesswein.com/?ref=bb-xz32gw",
    label: "Giesswein: 15% off; Ask me for current code",
    code: "BBCHIFF2",
    subtitle: "Organic, eco-friendly and sustainable shoes",
    tags: ["Human", "Clothing"],
  },
  {
    link: "https://glnk.io/q3oj/chiffonthemaltipoo",
    label: "Yamazaki Home",
    code: null,
    subtitle: "Organization and storage for your home!",
    tags: ["Human", "Pet", "Home"],
  },
  {
    link: "https://doraihome.com/?wly=131026",
    label: "Dorai Home: 15% off",
    code: "CHIFFON",
    subtitle:
      "Fast drying, mold resistant home goods! Dog bowl mats, bath mats and more.",
    tags: ["Human", "Pet", "Home"],
  },
  {
    link: "https://www.debuyer-usa.com/chiffonthemaltipoo",
    label: "deBuyer",
    code: null,
    subtitle: "French cookware and bakeware; LE TUBE pastry gun",
    tags: ["Human", "Home"],
  },
  //  {
  //  link: "https://www.vanderpumppets.com/",
  //label: "Vanderpump Pets: 15% off",
  //code: "CHIFFON15",
  //},
  //{
  // link: "https://www.wagandwonder.com/",
  //label: "Wag and Wonder: 10% off",
  // code: "CHIFFON10",
  // subtitle: "Dog walk accessories"
  //},
  //{
  //  link: "https://poisepup.com/discount/CHIFFON20",
  //  label: "PoisePup: 20% off",
  //  code: "CHIFFON20",
  //  subtitle: "Dog walk accessories"
  // },
];

export interface ISponsor {
  link: string;
  label: string;
  subtitle?: string;
  code: null | string;
}

export default sponsors;
