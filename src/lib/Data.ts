import game1 from 'src/assets/game1.jpg';
import game2 from 'src/assets/game2.jpg';
import game3 from 'src/assets/game3.jpg';
import work1 from 'src/assets/work1.jpg';
import work2 from 'src/assets/work2.jpg';
import work3 from 'src/assets/work3.jpg';

import banner1 from 'src/assets/banner1.jpg';
import banner2 from 'src/assets/banner2.jpg';
import banner3 from 'src/assets/banner3.jpg';

export const gaming = [
  {
    price: 1200.0,
    name: "Gaming PC Spec 1",
    description: "Always ready for action, the Gaming PC Spec 1 excels at gaming, streaming, and everything in between. An Intel i7 Series CPU to fly through multitasking and more. Gameplay graphics are smooth with the latest GeForce GTX 16-Series GPU which reliably delivers high frame rates for a ton of modern games. A superfast NVMe PCIe SSD speeds up load times, while an open SSD slot makes it easy to add terabytes more space for all your games.",
    cpu: "Intel Core i7-7700HQ",
    gpu: "NVIDIA GeForce GTX 1660 Ti",
    ram: "16GB",
    storage: "1TB HDD + 512GB SSD",
    image: game1,
  },
  {
    price: 2400.0,
    name: "Gaming PC Spec 2",
    description: "Always ready for action, the Gaming PC Spec 2 excels at gaming, streaming, and everything in between. AMD Ryzen 7 Series CPU to fly through multitasking and more. Gameplay graphics are smooth with the latest GeForce GTX 16-Series GPU which reliably delivers high frame rates for a ton of modern games. A superfast NVMe PCIe SSD speeds up load times, while an open SSD slot makes it easy to add terabytes more space for all your games.",
    cpu: "AMD Ryzen 7 5800X",
    gpu: "NVIDIA GeForce RTX 3070 Ti",
    ram: "24GB",
    storage: "2TB HDD + 1TB SSD",
    image: game2,
  },
  {
    price: 3600.0,
    name: "Gaming PC Spec 3",
    description: "Always ready for action, the Gaming PC Spec 3 excels at gaming, streaming, and everything in between. An AMD Ryzen 9 Series CPU to fly through multitasking and more. Gameplay graphics are smooth with the latest GeForce GTX 16-Series GPU which reliably delivers high frame rates for a ton of modern games. A superfast NVMe PCIe SSD speeds up load times, while an open SSD slot makes it easy to add terabytes more space for all your games.",
    cpu: "AMD Ryzen 9 5900X",
    gpu: "NVIDIA GeForce RTX 3090 Ti",
    ram: "32GB",
    storage: "2TB HDD + 2TB SSD",
    image: game3,
  },
];

export const work = [
  {
    price: 400.0,
    name: "Work PC Spec 1",
    description: "The Work PC Spec 1, Future Tech’s most mobile workstation, strikes the balance between power and mobility, all at a comfortable price point. Perfect for highly mobile power users, the Work PC Spec 1 packs the power of AMD Ryzen PRO processors with professional-level integrated Radeon graphics, all in a compact 14-inch chassis.",
    cpu: "AMD Ryzen 3 3250U",
    gpu: "Integrated Graphics",
    ram: "4GB",
    storage: "256GB NVMe SSD",
    image: work1,
  },
  {
    price: 800.0,
    name: "Work PC Spec 2",
    description: "The Work PC Spec 2, Future Tech’s most mobile workstation, strikes the balance between power and mobility, all at a comfortable price point. Perfect for highly mobile power users, the Work PC Spec 1 packs the power of AMD Ryzen PRO processors with professional-level integrated Radeon graphics, all in a compact 14-inch chassis.",
    cpu: "AMD Ryzen 5 3500U",
    gpu: "Integrated Graphics",
    ram: "8GB",
    storage: "512GB NVMe SSD",
    image: work2,
  },
  {
    price: 1200.0,
    name: "Work PC Spec 3",
    description: "The Work PC Spec 3, Future Tech’s most mobile workstation, strikes the balance between power and mobility, all at a comfortable price point. Perfect for highly mobile power users, the Work PC Spec 1 packs the power of AMD Ryzen PRO processors with professional-level NVIDIA graphics, all in a compact 15-inch chassis.",
    cpu: "AMD Ryzen 7 5800X",
    gpu: "NVIDIA GeForce GTX 1660 Ti",
    ram: "16GB",
    storage: "1TB NVMe SSD",
    image: work3,
  },
];


export const banners = [
  {
    id: 0,
    name: "banner 1",
    imgurl: banner1,
    attribution: "eluktronics.com"
  },
  {
    id: 1,
    name: "banner 2",
    imgurl: banner2,
    attribution: "eluktronics.com"
  },
  {
    id: 2,
    name: "banner 3",
    imgurl: banner3,
    attribution: "eluktronics.com"
  }
]