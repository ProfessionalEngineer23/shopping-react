import React, { useState, useEffect } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';
import { useSelector, useDispatch } from 'react-redux';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  useEffect(() => {
  const updated = {};
  cartItems.forEach(item => {
    updated[item.name] = true;
  });
  setAddedToCart(updated);
}, [cartItems]);


  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prev) => ({
      ...prev,
      [product.name]: true,
    }));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };

  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  };

  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

const componentsArray = [
  {
    category: "Simple Components",
    components: [
      {
        name: "1kΩ Resistor",
        image: "https://media.rs-online.com/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/F7078669-01?pgw=1",
        description: 'Fixed resistor for current limiting. <a href="https://docs.rs-online.com/bb66/0900766b8157ae2c.pdf" target="_blank">Datasheet</a>',
        cost: "$0.05"
      },
      {
        name: "100nF Ceramic Capacitor",
        image: "data:image/jpeg;base64,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",
        description: 'General-purpose decoupling capacitor. <a href="https://docs.rs-online.com/56fa/0900766b817069bd.pdf" target="_blank">Datasheet</a>',
        cost: "$0.10"
      },
      {
        name: "5mm Red LED",
        image: "https://media.rs-online.com/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/F2285607-01?pgw=1",
        description: 'Indicator light emitting diode. <a href="https://docs.rs-online.com/e88a/0900766b81384f0d.pdf" target="_blank">Datasheet</a>',
        cost: "$0.20"
      },
      {
        name: "1N4007 Diode",
        image: "https://mm.digikey.com/Volume0/opasdata/d220001/derivates/1/001/201/597/31%7EDO41%7E%7E2_sml%28200x200%29.jpg",
        description: 'Rectifier diode for blocking reverse voltage. <a href="https://www.diodes.com/assets/Datasheets/ds28002.pdf" target="_blank">Datasheet</a>',
        cost: "$0.05"
      },
      {
        name: "10µF Electrolytic Capacitor",
        image: "data:image/jpeg;base64,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",
        description: 'Polarized capacitor for filtering. <a href="https://docs.rs-online.com/9206/0900766b80f2e972.pdf" target="_blank">Datasheet</a>',
        cost: "$0.15"
      },
      {
        name: "Green 3mm LED",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTyrlpjeZyByRk0slnhvisvK_Syun6Ng0JFfdvQfx_CYZ4ixDPnFz8wpGc-yhs2KoxBAiwuW_Ki0PIDq1B5UUzI5mTAWuD2qWwyTxenB2IQd-iVYQMp7izl-A",
        description: 'Compact indicator LED. <a href="https://www.kingbrightusa.com/images/catalog/SPEC/WP424GDT.pdf" target="_blank">Datasheet</a>',
        cost: "$0.20"
      }
    ]
  },
  {
    category: "Microcontrollers",
    components: [
      {
        name: "Arduino Uno R3",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/320px-Arduino_Uno_-_R3.jpg",
        description: 'Popular ATmega328P development board. <a href="https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf" target="_blank">Datasheet</a>',
        cost: "$25"
      },
      {
        name: "ESP32 S3 DevKitC 1",
        image: "https://www.espressif.com/sites/default/files/dev-board/ESP32-S3-DevKitC-1%20%E5%A4%A7.png",
        description: 'Wi-Fi + Bluetooth microcontroller module. <a href="https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s3/esp32-s3-devkitc-1/user_guide_v1.0.html" target="_blank">Datasheet</a>',
        cost: "$16"
      },
      {
        name: "Arduino Nano",
        image: "https://store.arduino.cc/cdn/shop/files/A000005_03.front_575x432.jpg?v=1727098231",
        description: 'Compact ATmega328P microcontroller board. <a href="https://docs.arduino.cc/resources/datasheets/A000005-datasheet.pdf" target="_blank">Datasheet</a>',
        cost: "$12"
      },
      {
        name: "STM32 Blue Pill",
        image: "https://content.instructables.com/FV4/QFA6/JMAV9VS8/FV4QFA6JMAV9VS8.jpg?auto=webp",
        description: 'ARM Cortex-M3 development board. <a href="https://www.st.com/resource/en/datasheet/stm32f103c8.pdf" target="_blank">Datasheet</a>',
        cost: "$6"
      },
      {
        name: "Teensy 4.0",
        image: "https://www.pjrc.com/store/teensy40_front.jpg",
        description: 'High-speed ARM Cortex-M7 board. <a href="https://www.pjrc.com/store/teensy40.html" target="_blank">Datasheet</a>',
        cost: "$20"
      },
      {
        name: "Adafruit Feather M0",
        image: "data:image/jpeg;base64,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",
        description: 'ATSAMD21G18 ARM Cortex M0 board. <a href="https://docs.rs-online.com/e91d/0900766b81533fcc.pdf" target="_blank">Datasheet</a>',
        cost: "$20"
      }
    ]
  },
  {
    category: "Raspberry Pi Boards",
    components: [
      {
        name: "Raspberry Pi 5 (8GB RAM)",
        image: "data:image/jpeg;base64,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",
        description: 'Powerful SBC with quad-core CPU. <a href="https://docs.rs-online.com/210f/A700000012628488.pdf" target="_blank">Datasheet</a>',
        cost: "$55"
      },
      {
        name: "Raspberry Pi Zero 2W",
        image: "https://assets.raspberrypi.com/static/51035ec4c2f8f630b3d26c32e90c93f1/2b8d7/zero2-hero.webp",
        description: 'Compact SBC with Wi-Fi & Bluetooth. <a href="https://datasheets.raspberrypi.com/rpizero2/raspberry-pi-zero-2-w-product-brief.pdf" target="_blank">Datasheet</a>',
        cost: "$15"
      },
      {
        name: "Raspberry Pi 3 Model B+",
        image: "https://assets.raspberrypi.com/static/f2e9242911c5d63868b22a8f5d3da8a6/9ff6b/bef8cda3-64ea-4098-bf18-8e731a6e9a0d_3b%2B%2BAngle%2B2.webp",
        description: 'Broadcom BCM2837B0, 1GB RAM. <a href="https://datasheets.raspberrypi.com/rpi3/raspberry-pi-3-b-plus-product-brief.pdf" target="_blank">Datasheet</a>',
        cost: "$35"
      },
      {
        name: "Raspberry Pi Pico",
        image: "https://media.rs-online.com/Y2122162-01.jpg",
        description: 'RP2040 microcontroller board. <a href="https://docs.rs-online.com/6ef1/A700000007309910.pdf" target="_blank">Datasheet</a>',
        cost: "$5"
      },
      {
        name: "Raspberry Pi Compute Module 5",
        image: "https://mm.digikey.com/Volume0/opasdata/d220001/derivates/1/008/178/MFG_ComputeModuleCM5_sml%28200x200%29.jpg",
        description: 'For embedded applications. <a href="https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/6530/Rasberry-pi-series.pdf" target="_blank">Datasheet</a>',
        cost: "$35"
      },
      {
        name: "Raspberry Pi 1 Model A+",
        image: "https://assets.raspberrypi.com/static/39b4751307e481cfc7a68d4d71418462/9ff6b/23ca7cd2-48b1-433b-841e-cd0241a5480f_1A%2BAngle%2B1%2BREFRESH.webp",
        description: 'Quad-core upgrade to Zero W. <a href="https://docs.rs-online.com/473d/0900766b81527cd2.pdf" target="_blank">Datasheet</a>',
        cost: "$20"
      }
    ]
  },
  {
    category: "LCD Displays",
    components: [
      {
        name: "16x2 Newhaven Character LCD",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSACDCgOGuFn6z8irnJF-lhmAvGBLjD26qgc5otnLH_BgxbTBSKyj2-DzBX2DDDsh1w-RcYLPUF7c_GzhYiujKMWpfhGINRs0J3bMKMSrxQOmSDgSIsyixEhFDW0EgrGb-VaRX3Wio&usqp=CAc",
        description: 'Parallel interface LCD display. <a href="https://newhavendisplay.com/content/specs/NHD-0216K1Z-NSW-BBW-L.pdf" target="_blank">Datasheet</a>',
        cost: "$5"
      },
      {
        name: "I2C 20x4 LCD",
        image: "https://m.media-amazon.com/images/I/51Y0YNk9OwL._AC_SY300_SX300_.jpg",
        description: 'Large character display with I2C interface. <a href="https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/800/DFR0154_Web.pdf" target="_blank">Datasheet</a>',
        cost: "$12"
      },
      {
        name: "1.8\" TFT SPI Display",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ8NDQ0NDQ0NDQ0NDQ8ODQ0OFREWFhURFRUYHSggGBolHRYVITMhJSkrLi4wFx8zPTMtNygwMCsBCgoKDg0OGRAQGi8lHiY1Ly0vLSsrLys3LS8tLS0tLS8tLi0rKy0tLTUuLS8vLSstLSstLTUtNS8tLS0tLS0uK//AABEIALcBFAMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQIFAwQGB//EADkQAAICAQIEBAIHBwQDAAAAAAABAgMRBBIFITFBBhNRYSJxFDJCcoGRsSMzUmKhwfAHQ9HxFcLh/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIxEBAAICAgICAgMAAAAAAAAAAAECAxESMQQhYfCh0SJBUf/aAAwDAQACEQMRAD8A+zgFAhQAAAAAAAAAAAAAAAAAAAAAAACFAAAAAAAAAEKABCkAAAAAABQAAAAAAAAAAAAAAAAAABAKCAAAcMtVWrFU5w8ySclXuW9pdXgDmBodZ4glXLDrVa3OK81yc5YeM4imo/mzZ8P4hC9PGI2Rxvrzlxz0fun6mYtEzqF1LtlIDSKCFAAAAAAAAAAEAAACgAAAAAAAAAAAAAAAEAAABvCy+SXNt9EAOLU6mumDnbKMIrvJ4PKeJ/H2l0ScKWr7u2OcIv8AufJePeJdZxCblbZLb2gniKXpgg+geKf9TYV7qtCt8ua8x9F/nt+Z85j4h1f0hal2ydilvz0w/Y1yrMtgH3jw14ir4ppnOrYtXCGLK5dJNd/k/wChrv8Ax+oVq1StjRqa5yyobraPo6WZVzSSbfLoumF35nybgnFLtDfC6mTi4vPs16M+w161cZ0av0djq1lUWvL8ycIqTwm+T5+zfToyxrZO284FxujXVOymWXF7ZwfKUH8vR9UbNM+MV2arhGs3xabTaljPlXRT+KL+T5ezR9V4FxinXURupftOD+tXL+FgbMBACggApCkAoAAEKQBkFAAAAAAAAAAAAACAAAAB19fr6dNB2XzjXFer5v5LufNfE/8AqVKW6rQpwXNO1/Wfy9PwA91x7xJpNBFu6ac+1cXmX4+h8o8UePdVrXKupumnniMeTa9/U8vqdRbfJzslKTfdsxjWQcbi5PMm231b5szjA5YwM1EDhUDLYc6gNoHXdZ3/AA9xq7h+ojdU2kn8Ue0l3TR13E45wA+yujR8Y071lEIvUbI+ZBbXZujzilu5J5xza5pYZqNJrJVX2W0OE9ZXtrurVm2rUQT58n3SWM/ZfXK5nhfDHHruHXxsg3tzicX9WUe6Z9T1el0/FNP9M0jcbknJxrajJW4XxvCy5LCx2a9GaiUmHoeG8Qr1NasrafNxnFSjJwmusXjllHcPl9HGo6K6y6Ll52/yr6MylC5Rklv3Ppyy03l5656n0ThfEatVTG6mW6Evzi+8WuzQkiXcABFUEKAAAAAAACAUAAAAAAAAAgAA0vHvEum0UZbn5lkYuXlxfRe77AbmUkk22kl1beEjxnif/UDT6VSr02Lrum7rCLPn/iTxrrNc3FSdVWeUINr8zzag3zZBsOMcc1Wum53TlLPbPJL0NfGs5YwORQA4lAzUDlUDJRA41EyUTkUS7QOPBdpyYGAjicTBxOdxMXEDrSgbrwp4it4depJ5rfKcG/hcfc1bicU4BX13jHCdPxOn6ZpGm5pucVtUlbhJSk+qSS5pdVzR5fw7xDU6DUuNcZXVyb82qvMo2QX+5D5Luarwf4nt4fck25Uywpwb5Nf53PqUpU2ab6Tpfjq2WNVReOcutf8AKs9fT8sahJbXQa2rUVQupkp1zWU1+j9H7HaPCcHhZob5eW641WPNmj3ylswubjJ/aXp+fTK9tRdGyKnF5i+jMxaJ6ldTHblKQFFAAAAAQFAEKQoAAACFIwBjuWcfkdPimuVEM4UpyeyuGcbpdfySTf4HkdXqdS7o3wuulOuTShtjDTT7ShFd179fcxa9a9rETPT0Pi56yOllPR5lKPOyEf3kq+7h6tenc+RavU3ahwUpNYTlCLilF56yXq+Xf/4fWX4s0kdLHVTnhS5bPtbsdMHyTjvFadTrp2VVyrrtecJfUt5/ElnkpPm/dtnfBkrv37iXPLSdeu2p1On2yzH6ucPH2X6fIRib/wCi1Omdu5SnmELYYb+s3z5dFyXPnzb9s6m/TuqWOsX0f9i5cfGfXSY8nKPlxKBmolwXa2cXQSMkgqzJQwA2l2mSLgDDaTBmQIxaMGjkZiwOJowaOWRzaDh1+qsVVEJTlLoorP4/IDXyj+Z9D/000vEIy8yKcdM+U3ZlQnH0XrJf9mz8P+BdPpErtc422JZ8rP7KH3n3/T5nf1/iF2PydHFSx8O/GKoL2Xf9BMqnHb6NNYoxjKydj8ytddk1Lk1y9fc3nB63CiuDWGllrrhtttf1NPwrh7T8yzNlsvrWS5y+S9F8j0NMMIlY0TLnRSIpoUAAAAAAAERSFAAAAYsoA0/HdKrYJ9JwblXL+F/8Hnp6ucli2FUGlNWSUlBp7ZbUpPkt2Es4WN2cns7q9yPMca0M0pSqwp4+Fv6r552v/O77NmLViTbxmqnTCb0rUrI2qLUnONlatk8yrVkUouUc55dvkcuk4HRUsLlJ53WtbpSXsu3yR2a9HZqNPGidUo7aZwjZCUp2qMZuXwUp48xvKT5fVfzOHTXzruno75brq4wmpuOxyjKOVmP2Zro17HzM1LY966/v9vbjtW+mn1mnnpptpfs0/jrTbjHP2l7Pl+aM3oo2wzUpzTjvn0ePu+6/R/l6C/Tq2OxpZSxFPpJfwP2fb0fz5aOLeivi458mUspdHXLvDnnms4z3TPf4flRMcLdPH5GCazzq0jg4y2v8H6ozUTYa/TqW6xOO1vdJRWNmW/iX8r/p+HPpYaeH1R6smOaS50vFoTBcGSQwc22OBgyaIBiYszaMWEYmPNvEVlm04NwLU66eymDa5bpPlGC9ZPt/nU+i8I8NaHhkPNucLro83OfKqt+yff3fP0wFeT8OeBL9Ttu1LdFHX4l+0mv5Yv8AV/1PaT1ei4XX5OnglNpfDFbrrH6yf/P4I6Ot47qNXJw0qcK+jvksN/cX92Z8O4NGD3SzOb5ynLnJv5jsdSUNTrnm9uFWcqmL5P7z7s3Oh4dCtJRSWPY7tOnSO3XVgukYU14OykIoyChSFAAAAAAAAAhSFAAAAQpAI0dbVUKaaZ2iNAeE8R8PtjCcquf8awm3HHNrPf36momlPTqMY+TKumubnYoRpq2yjus3RTnJz3RTj/P8j6LrdLuXLqeL41G3SqVlW6L6Nxk0q8vrjv6e3T0OWSnKNNVtqWq0Wqk5zpsUY6inCsgnmLi1mMk+8Wn/AFwdnXadXQk2s5TUor7eFnP3l1z3x8zh1dEZJ20QlPVbKZvcroXNY/ayunN7Gm29uPVGXD9bvy9soThJwtqlynXJdYv0ffPyZ8y1Jxz66+/h762jJGpazh9j0tsY24dUt3lznDfBprDUo55+6zlcmi8W4dt2ThFwjZ+6U5Ld9x/53XqsbLiGjjYm1+7bW/lzg3j40v8APTozVc3im2W6deVXiWIzg/V9l/zg+v4maMscLPm+RinF/KOmsS/MywbDXaGytR3wkpPO2Uk15sV0yu0l3+R1Npq1ZrOpSJ3G3DtJtOZwfY2/A/DWo1r+CO2pP4rp5Va9Un9p+y/FojTRV1Sm1GCbbaSSWW36JHtvD/gN4V2ubrj1VK/eS+f8P6/I9BpNFoOE178qVuMO6xJzb9ILt8l+LZrtTxDV654r3UUv7X+7Nf8AqibGw1vHNPpYrS6StOUeSqq6RfrOXb9TW18Pu1UlZqpbsc41rlXD8DYcN4PXUvhis933ZuKqBr/TbqaXRRgkkjv10nLCvByJFRjGODJIuChRAACgAAAAAAAAACFIUAAAICkAAADFo1nE9CrIvknya59GvRm1MZRyB894pP6PCe+MJuXw4sr3xt+JSUZ8uqaznK/VPW8QqhRKerhPzLLnVvcJ1T+kJxzKUaoLdWodMM9zxnhsbIvKTT6rC/B/M8vqsUK2ex7pQhGx02yom4weU4zUXtzjDj8lnJxy4+UffbdL8ZdbSa+t1ecpR8qcG3KSTUPfD/Jr8Dh4XwTWandfTRF6dJtTuzCy5d1Su+fWSwces4fdp7b9SpL4tRXZZp/LktPGc4yltWf3ia5NrPTOHyZ9I8PcYq1tEbq+vSUXylGS6prsebxsUxblvp1zX5Rp42cYcQpkqqnBLD83PxV+XjdGxYyprnz78llnn69BbOSgoS8yWHCCjmdsX0lFL26+nfB9B4t4a83V/SKrFRC2tw1Sjui5tNYnyeG8cnn26mVmp0fDa9tUUpyX2Yp3Wv8AD/o+pfJW1fl4qUms/DVcG8HV1JW65qUuq08X8K+/Lv8AJcvmdvX+If8AY0UIzcVtW1YorXpy6/JcjpWfStc/2jdNL/2ov4pL+Z/2NxoeGwqSUYpYOLrtqtJwidk/O1MnbZ6y+rH2iuxvqNKlySOzXSc8YYKjjhUcyiVIuAokUAAAABQAAAAAAAAAAAAhSFAAAAAAICgCAADjshlHmvEPB43Qaax3jLHOEvX5HqTitqUlhkmNjw3DtLfHTqEP2t8JuMlOTl5UOf1U84X1ei9PU692uu4XZXfKGXZJRuohzbjlYklyw8Obx/L75N7xbg9knml7ZZ655Y9GujOnpPDTlJT1MvMa6QXKC/A5cJ5ba5etOXVcfu1T2aSLUX1usjhL7se7+ZycO4KovzLG7LJc5Tm8ybNxp9FGCSjFJL0R3IUnWIZdenTpdjtQrwZqJkkURIuCgAAAABQIUAAAAAAAAAAAAAAAhSFAAAAAAAAAAACAoAwcUTYjMAYqJcFAAAAAUAAAAAAAAAAAAAAAEKAAIBQQAUgAFAAAAAAAAAAEwUAAAAAIAKAAAAAAAAAAAAAAACAAAAAAAAAAD//Z",
        description: '128x160 color display. <a href="https://cdn-learn.adafruit.com/downloads/pdf/1-8-tft-display.pdf" target="_blank">Datasheet</a>',
        cost: "$15"
      },
      {
        name: "2.4\" TFT Touchscreen",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRSTF-n7abCX9Ytzf5a5mImKMj3QlPgY5u6pj4N_4eA1_-dkyfpxpSjGahVJNtV-Cqm209i__0qIRvDzmXBSE3FFTdZS9NDakx2rGnGa_8xDHXmOTck8BICkJs1j4aBv89jDOxHqJ4&usqp=CAc",
        description: '240x320 touch display. <a href="https://cdn-learn.adafruit.com/downloads/pdf/adafruit-2-4-color-tft-touchscreen-breakout.pdf" target="_blank">Datasheet</a>',
        cost: "$25"
      },
      {
        name: "OLED 128x64 Display",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDBkJTMQ5FYAIYTI6qXcMdw_1nDYT5h5N82IeUvBhEdVMHWKPV1ldc8HlolwxXExTGJxei7_nt11L9fSuknPqbMWpnur072PiwQZz4noLrDEv1ZiHiUCNtOg3dFo_ZBk3boB5fwXI0dws&usqp=CAc",
        description: 'Monochrome OLED via I2C. <a href="https://www.farnell.com/datasheets/4321321.pdf" target="_blank">Datasheet</a>',
        cost: "$18"
      },
      {
        name: "7\" HDMI LCD Display",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRSeQx565JyEtLlRlXG45iDBUcJr9Q3aIws_YVA-GqV2n-L2J4ceAuWBH046UrExBvJPrwJtIEnJJFgRUpkxe7ZRQaegViOeDpuhsUTtXnPB-s5lDS0DL9ixQ",
        description: 'Capacitive touch, 1024x600. <a href="https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/2279/DFR0506_Web.pdf" target="_blank">Datasheet</a>',
        cost: "$65"
      }
    ]
  }
];


  return (
    <div>
      {/* Top Navbar */}
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://w7.pngwing.com/pngs/210/606/png-transparent-round-green-and-white-circuit-board-electronic-circuit-printed-circuit-board-electrical-network-circuit-diagram-circuit-board-cartoon-cartoon-character-other-electronics-thumbnail.png"
              alt="logo"
              style={{ width: '50px', height: '50px', objectFit: 'contain' }}
            />
            <a href="/" onClick={handleHomeClick} style={{ textDecoration: 'none' }}>
              <div style={{ marginLeft: '10px' }}>
                <h3 style={{ color: 'white', margin: 0 }}>E-Components</h3>
                <i style={{ color: 'white' }}>Components in one place</i>
              </div>
            </a>
          </div>
        </div>

        {/* Links & Cart */}
        <div style={styleObjUl}>
   <div style={{ position: 'absolute', right: '40px', top: '20px' }}>
  <a href="#" onClick={handleCartClick} style={styleA}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="48"
      height="48"
    >
      <circle cx="80" cy="216" r="12" fill="black" />
      <circle cx="184" cy="216" r="12" fill="black" />
      <path
        d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
        fill="none"
        stroke="#fff"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="128"
        y="150"
        textAnchor="middle"
        fontSize="100"
        fontWeight="bold"
        fill="white"
      >
        {totalItems}
      </text>
    </svg>
  </a>
</div>

        </div>
      </div>

      {/* Product List or Cart View */}
      {!showCart ? (
        <div className="product-grid">
          {componentsArray.map((category, index) => (
            <div key={index}>
              <h1>{category.category}</h1>
              <div className="product-list">
                {category.components.map((plant, idx) => (
                  <div className="product-card" key={idx}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description" dangerouslySetInnerHTML={{ __html: plant.description }}
                    />
                    <div className="product-price">{plant.cost}</div>
                    <button
  className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}

                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
