import React from "react";

export const cars = [
    {
      id: 1,
      description: "German Engineering",  // Description de la voiture
      title: "Mercedes - G63 AMG",        // Titre de la voiture
      year: 2021,                         // Année de sortie
      brand: "Mercedes",                  // Marque
      model: "G63 AMG",                   // Modèle
      power: 577,                         // Puissance en chevaux
      cylinders: 8,                       // Nombre de cylindres
      displacement: 4.0,                  // Cylindrée en litres
      drive: "AWD",                       // Type de traction
      max_speed: "220",                   // Vitesse maximale en km/h
      zero_to_100: "5.4",                 // Accélération de 0 à 100 km/h en secondes
      price: "€156,000",                  // Prix
      src: "https://static.wixstatic.com/media/bd4349_ebfcbad1e4a041999b86810860652fb1~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_ebfcbad1e4a041999b86810860652fb1~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.mercedes-benz.fr/passengercars/models.html?group=all&subgroup=see-all",
      content: () => {
        return (
          <p>
            The Mercedes G63 AMG is an iconic luxury SUV, combining raw power with refinement. 
            With its 4.0-liter V8 biturbo engine, it offers exceptional performance despite 
            its imposing size. <br /> <br /> Its robust and timeless design, inherited from the 
            original G-Class, conceals cutting-edge technology and a sumptuous interior. The G63 AMG 
            is capable of impressive off-road performance while providing luxurious driving comfort 
            on the road. It&apos;s the perfect choice for those seeking a vehicle that combines prestige, 
            power, and versatility.
          </p>
        );
        },
    },
    {
        id: 2,
        description: "German Muscle",
        title: "Porsche GT3 Touring",
        year: 2022,
        brand: "Porsche",
        model: "GT3 Touring",
        power: 502,
        cylinders: 6,
        displacement: 4.0,
        drive: "RWD",
        max_speed: "320",
        zero_to_100: "3.4",
        price: "€200,000",
        src: "https://static.wixstatic.com/media/bd4349_453f04e05f73454d8401c7aa6a4f80b3~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_453f04e05f73454d8401c7aa6a4f80b3~mv2.jpg",
        ctaText: "Learn More",
        ctaLink: "https://www.porsche.com/belgium/fr/models/911/911-gt3-models/911-gt3/",
        content: () => {
          return (
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <p>
                    The Porsche GT3 Touring is a masterpiece of German engineering, blending 
                    high-performance capabilities with understated elegance. This track-focused 
                    road car boasts a naturally aspirated 4.0-liter flat-six engine, delivering 
                    exhilarating power and a spine-tingling soundtrack. <br /> <br /> Unlike its 
                    more flamboyant GT3 sibling, the Touring package offers a more subtle 
                    appearance, making it perfect for enthusiasts who prefer to fly under the 
                    radar. With its precision handling, race-derived technology, and daily 
                    usability, the GT3 Touring represents the pinnacle of the driver&apos;s 
                    Porsche experience.
                </p>
                <p>
                    The GT3 Touring is a driver&apos;s car in the purest sense, designed to 
                    deliver an unfiltered connection between the road and the driver. Its
                    manual transmission, rear-wheel drive, and naturally aspirated engine
                </p>
            </div>
          );
        },
    },
    {
        id: 3,
        description: "Luxury Sports Car",
        title: "Porsche Macan GTS",
        year: 2021,
        brand: "Porsche",
        model: "911",
        power: 379,
        cylinders: 6,
        displacement: 3.0,
        drive: "RWD",
        max_speed: "308",
        zero_to_100: "4.2",
        price: "€140,000",
        src: "https://static.wixstatic.com/media/bd4349_198b227e457d47f9b791d504c6ee7160~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_198b227e457d47f9b791d504c6ee7160~mv2.jpg",
        ctaText: "Learn More",
        ctaLink: "https://porsche.com/911",
        content: () => {
          return (
            <p>
              The Porsche 911 is a luxury sports car that has set the standard for
              high-performance vehicles for over half a century. Its iconic design and
              engineering excellence make it one of the most revered cars on the
              market. <br /> <br /> With its rear-engine layout and razor-sharp
              handling, the 911 delivers a driving experience like no other. Whether
              on the racetrack or the open road, it is celebrated for its speed,
              agility, and prestige.
            </p>
          );
        },
    },
    {
        id: 4,
        description: "Supercar",
        title: "Lamborghini Aventador SVJ",
        year: 2018,
        brand: "Lamborghini",
        model: "Aventador",
        power: 730,
        cylinders: 12,
        displacement: 6.5,
        drive: "AWD",
        max_speed: "350",
        zero_to_100: "2.9",
        price: "€750,000", 
        src: "https://static.wixstatic.com/media/bd4349_bfb983b3e0a64d90a099c06350b81b4d~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_bfb983b3e0a64d90a099c06350b81b4d~mv2.jpg",
        ctaText: "Learn More",
        ctaLink: "https://lamborghini.com/aventador",
        content: () => {
          return (
            <p>
              The Lamborghini Aventador is a jaw-dropping supercar that delivers
              extreme performance with its V12 engine and aggressive design. A symbol
              of Italian craftsmanship and innovation, the Aventador offers an
              exhilarating driving experience. <br /> <br /> With a top speed of over
              217 mph and acceleration from 0 to 60 mph in just 2.9 seconds, this
              car is built for those who seek the ultimate in speed and luxury. The
              Aventador&apos;s sharp lines and aerodynamic profile make it as beautiful as
              it is powerful.
            </p>
          );
        },
    },
    {
      id: 5,
      description: "Petrol",
      title: "Porsche - 992 Carrera",
      year: 2021,
      brand: "Porsche",
      model: "992 Carrera",
      power: 385,
      cylinders: 6,
      displacement: 3.0,
      drive: "RWD",
      max_speed: "293",
      zero_to_100: "4.0",
      src: "https://static.wixstatic.com/media/bd4349_baeab47eeb10448db9f9dec9c6e582ef~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_baeab47eeb10448db9f9dec9c6e582ef~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.porsche.com/usa/models/911/911-carrera-models/",
      content: () => {
        return (
          <p>
            The Porsche 992 Carrera is a legendary sports car known for its exhilarating 
            performance and timeless design. Powered by a twin-turbocharged flat-six engine, 
            the 992 Carrera delivers incredible acceleration and precision handling. <br /> <br /> 
            Its sleek and aerodynamic body is a testament to Porsche&apos;s commitment to engineering excellence. 
            The 992 Carrera seamlessly blends cutting-edge technology with the thrill of driving, 
            making it one of the most sought-after sports cars in the world.
          </p>
        );
      },
    },
    {
      id: 6,
      description: "Petrol",
      title: "BMW - M3 Competition xDrive",
      year: 2024,
      brand: "BMW",
      model: "M3 Competition xDrive",
      cylinders: 6,
      displacement: 3.0,
      drive: "AWD",
      max_speed: "290",
      zero_to_100: "3.5",
      src: "https://static.wixstatic.com/media/bd4349_646d0cca6a5f42e3b3cc5fd42812980b~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_646d0cca6a5f42e3b3cc5fd42812980b~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.bmw.com/en/bmw-models/bmw-m3-sedan.html",
      content: () => {
        return (
          <p>
            The BMW M3 Competition xDrive is a high-performance sedan that combines luxury 
            with adrenaline-pumping power. Featuring a 3.0-liter M TwinPower Turbo inline 
            6-cylinder engine, it delivers up to 510 horsepower. <br /> <br /> Its advanced xDrive 
            all-wheel-drive system ensures precise handling and stability, while the aggressive 
            exterior design reflects the car&apos;s racing DNA. Whether on the track or the road, 
            the M3 Competition xDrive offers a thrilling driving experience.
          </p>
        );
      },
    },
    {
      id: 7,
      description: "Hybride",
      title: "Range Rover Sport P460e",
      year: 2021,
      brand: "Land Rover",
      model: "Sport P460e",
      power: 460,
      cylinders: 6,
      displacement: 3.0,
      drive: "AWD",
      max_speed: "225",
      zero_to_100: "5.6",
      src: "https://static.wixstatic.com/media/bd4349_d77d75df35cd4ca6b39682ed25b86790~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_d77d75df35cd4ca6b39682ed25b86790~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.landrover.com/vehicles/range-rover-sport/index.html",
      content: () => {
        return (
          <p>
            The Range Rover Sport P460e is a plug-in hybrid SUV that offers the perfect balance 
            between luxury and efficiency. Powered by a 3.0-liter Ingenium engine and an electric 
            motor, it delivers an exceptional 460 horsepower. <br /> <br /> Its design exudes modern 
            sophistication, with a sleek profile and an opulent interior. The P460e combines 
            Land Rover&apos;s legendary off-road capability with cutting-edge technology for 
            a smooth and sustainable drive.
          </p>
        );
      },
    },
    {
      id: 8,
      description: "Hybride",
      title: "Porsche Cayenne E",
      year: 2021,
      brand: "Porsche",
      model: "Cayenne E-Hybrid",
      src: "https://static.wixstatic.com/media/bd4349_decebe775dc043f9b3ea681a7a75e701~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_decebe775dc043f9b3ea681a7a75e701~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.porsche.com/usa/models/cayenne/cayenne-models/",
      content: () => {
        return (
          <p>
            The Porsche Cayenne E-Hybrid combines the power of a 3.0-liter V6 engine with 
            an electric motor, providing a dynamic and eco-friendly driving experience. <br /> <br /> 
            The Cayenne offers the versatility of an SUV with the performance of a Porsche, 
            allowing you to enjoy every journey. Whether you&apos;re driving in the city or 
            off-road, the Cayenne E-Hybrid ensures a luxurious and thrilling ride.
          </p>
        );
      },
    },
    {
      id: 9,
      description: "Hybride",
      title: "Range Rover LWB P440e",
      year: 2021,
      brand: "Land Rover",
      model: "LWB P440e",
      src: "https://static.wixstatic.com/media/bd4349_03ccf590faf6488f8a3629947eecae9a~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_03ccf590faf6488f8a3629947eecae9a~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.landrover.com/vehicles/range-rover/index.html",
      content: () => {
        return (
          <p>
            The Range Rover LWB P440e is the epitome of luxury and power in an extended wheelbase 
            configuration. Its hybrid powertrain, combining a 3.0-liter engine with an electric motor, 
            delivers 440 horsepower. <br /> <br /> The LWB version offers unparalleled rear-seat comfort, 
            with ample legroom and a host of premium features. Whether driving in the city or cruising 
            off-road, the P440e delivers performance, elegance, and sustainability in equal measure.
          </p>
        );
      },
    },
    {
      id: 10,
      description: "Petrol",
      title: "Aston Martin - Vantage V8 Roadster",
      year: 2021,
      brand: "Aston Martin",
      model: "Vantage V8 Roadster",
      power: 510,
      cylinders: 8,
      displacement: 4.0,
      drive: "RWD",
      max_speed: "314",
      zero_to_100: "3.6",
      src: "https://static.wixstatic.com/media/bd4349_f5ec372529a74078acb9b96b0375ecc9~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_f5ec372529a74078acb9b96b0375ecc9~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.astonmartin.com/en-us/models/vantage",
      content: () => {
        return (
          <p>
            The Aston Martin Vantage V8 Roadster is a stunning sports car that combines 
            jaw-dropping design with exhilarating performance. Powered by a 4.0-liter twin-turbo V8 
            engine, it delivers 510 horsepower and a 0-60 mph time of just 3.6 seconds. <br /> <br /> 
            The Vantage&apos;s open-top design allows you to enjoy the thrill of driving with the wind in your hair, 
            making it a true driver&apos;s car for those who crave excitement and style.
          </p>
        );
      },
    },
    {
      id: 11,
      description: "Hybride",
      title: "Range Rover SWB P560e",
      year: 2021,
      brand: "Land Rover",
      model: "SWB P560e",
      power: 510,
      cylinders: 6,
      displacement: 3.0,
      drive: "AWD",
      max_speed: "230",
      zero_to_100: "5.4",
      src: "https://static.wixstatic.com/media/bd4349_03ccf590faf6488f8a3629947eecae9a~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_03ccf590faf6488f8a3629947eecae9a~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.landrover.com/vehicles/range-rover/index.html",
      content: () => {
        return (
          <p>
            The Range Rover SWB P560e is a short-wheelbase luxury SUV that offers unmatched refinement 
            and performance. With its powerful hybrid powertrain, it delivers 510 horsepower 
            and features the latest in driving technology. <br /> <br /> The SWB model offers agile handling 
            and a smooth ride, whether you&apos;re navigating city streets or tackling tough terrain. 
            The P560e is perfect for those seeking a blend of luxury, performance, and sustainability.
          </p>
        );
      },
    },
    {
      id: 12,
      description: "Petrol",
      title: "Lamborghini Tecnica",
      year: 2021,
      brand: "Lamborghini",
      model: "Tecnica",
      src: "https://static.wixstatic.com/media/bd4349_22cae9a366ee42aab933613250271f96~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_22cae9a366ee42aab933613250271f96~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.lamborghini.com/en-en/models/huracan/huracan-tecnica",
      content: () => {
        return (
          <p>
            The Lamborghini Huracán Tecnica is a high-performance supercar designed for both 
            the track and road. Powered by a 5.2-liter V10 engine, it produces 640 horsepower, 
            delivering an exhilarating driving experience. <br /> <br /> With its advanced aerodynamics 
            and lightweight construction, the Tecnica ensures optimal handling and speed. The car&apos;s 
            aggressive styling and cutting-edge technology make it one of the most desirable 
            supercars on the market today.
          </p>
        );
      },
    },
    {
      id: 13,
      description: "Petrol",
      title: "Lamborghini Urus Performante",
      year: 2021,
      brand: "Lamborghini",
      model: "Urus Performante",
      power: 666,
      cylinders: 8,
      displacement: 4.0,
      drive: "AWD",
      max_speed: "305",
      zero_to_100: "3.3",
      price: "€450,000",
      src: "https://static.wixstatic.com/media/bd4349_2bcfe3a79f52432c8d3ebf107701c97c~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_2bcfe3a79f52432c8d3ebf107701c97c~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.lamborghini.com/en-en/models/urus/urus-performante",
      content: () => {
        return (
          <p>
            The Lamborghini Urus Performante is an ultra-luxurious and high-performance SUV, 
            boasting a 4.0-liter twin-turbocharged V8 engine that delivers 666 horsepower. <br /> <br /> 
            With its exceptional speed, advanced driving dynamics, and aggressive design, the Urus 
            Performante offers the best of both worlds: SUV practicality combined with Lamborghini&apos;s 
            signature performance. Whether on-road or off-road, the Urus Performante is built 
            to impress.
          </p>
        );
      },
    },
    {
      id: 14,
      description: "Petrol",
      title: "Lamborghini Urus S",
      year: 2021,
      brand: "Lamborghini",
      model: "Urus S",
      src: "https://static.wixstatic.com/media/bd4349_32faa4e29e8e4dd59bb23abea2606020~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_32faa4e29e8e4dd59bb23abea2606020~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.lamborghini.com/en-en/models/urus/urus-s",
      content: () => {
        return (
          <p>
            The Lamborghini Urus S is a luxurious and powerful SUV that merges the best of Lamborghini&apos;s 
            engineering with the versatility of an SUV. Powered by the same 4.0-liter V8 engine as 
            the Performante, it also produces 666 horsepower. <br /> <br /> The Urus S features a more 
            refined design while still delivering the aggressive performance and sharp handling 
            that Lamborghini is known for. It offers the perfect balance between performance, 
            comfort, and versatility for everyday use.
          </p>
        );
      },
    },
    {
      id: 15,
      description: "Petrol",
      title: "Porsche GT3 RS",
      year: 2021,
      brand: "Porsche",
      model: "GT3 RS",
      src: "https://static.wixstatic.com/media/bd4349_16239663da0b4a6cb5334e15f8a3ecec~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_16239663da0b4a6cb5334e15f8a3ecec~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.porsche.com/usa/models/911/911-gt3-rs-models/",
      content: () => {
        return (
          <p>
            The Porsche GT3 RS is a track-focused sports car designed to push the limits of 
            performance. With a 4.0-liter naturally aspirated flat-six engine, it produces 
            520 horsepower and revs up to 9,000 RPM. <br /> <br /> Its aerodynamic bodywork, 
            lightweight components, and race-inspired interior make it one of the most exhilarating 
            Porsches to drive. Whether you&apos;re on the racetrack or the open road, the GT3 RS 
            offers unparalleled speed, agility, and control.
          </p>
        );
      },
    },
    {
      id: 16,
      description: "Petrol",
      title: "Porsche - 992 GT3",
      year: 2021,
      brand: "Porsche",
      model: "992 GT3",
      power: 510,
      cylinders: 6,
      displacement: 4.0,
      drive: "RWD",
      max_speed: "320",
      zero_to_100: "3.4",
      price :"€280,000",
      src: "https://static.wixstatic.com/media/bd4349_88e2cd0329e5469b981eb20fe33bab46~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_88e2cd0329e5469b981eb20fe33bab46~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.porsche.com/usa/models/911/911-gt3-models/911-gt3/",
      content: () => {
        return (
          <p>
            The Porsche 992 GT3 is a track-ready sports car with an exhilarating naturally aspirated 
            flat-six engine producing 510 horsepower. Known for its high-revving engine and precision handling, 
            the 992 GT3 is a favorite among performance enthusiasts. <br /> <br /> Its aggressive aerodynamic design 
            and lightweight materials ensure incredible speed and agility both on the track and the road.
          </p>
        );
      },
    },
    {
      id: 17,
      description: "Petrol",
      title: "Bentley Bentayga V8 S",
      year: 2021,
      brand: "Bentley",
      model: "Bentayga V8 S",
      power: 550,
      src: "https://static.wixstatic.com/media/bd4349_d9f6f7d594ee4746a35ab6284ecddd95~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_d9f6f7d594ee4746a35ab6284ecddd95~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.bentleymotors.com/en/models/bentayga/bentayga-v8.html",
      content: () => {
        return (
          <p>
            The Bentley Bentayga V8 S is a luxurious SUV that combines exceptional comfort with raw power. 
            With a 4.0-liter twin-turbo V8 producing 550 horsepower, the Bentayga V8 S provides a perfect 
            blend of high performance and refined luxury. <br /> <br /> Its spacious interior, advanced 
            technology, and powerful engine make it an ideal choice for those seeking an SUV with unmatched 
            prestige and capability.
          </p>
        );
      },
    },
    {
      id: 18,
      description: "Petrol",
      title: "Bentley Continental W12",
      year: 2021,
      brand: "Bentley",
      model: "Continental W12",
      power: 660,
      src: "https://static.wixstatic.com/media/bd4349_7df0678ce45a47bbb8a81163bcc5eca5~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_7df0678ce45a47bbb8a81163bcc5eca5~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.bentleymotors.com/en/models/continental-gt/continental-gt-speed.html",
      content: () => {
        return (
          <p>
            The Bentley Continental W12 is an iconic grand tourer, known for its elegant design and 
            unparalleled performance. Powered by a 6.0-liter W12 engine that delivers 660 horsepower, 
            it effortlessly blends power, luxury, and cutting-edge technology. <br /> <br /> Whether you&apos;re 
            cruising long distances or navigating city streets, the Continental W12 offers a truly 
            luxurious driving experience.
          </p>
        );
      },
    },
    {
      id: 19,
      description: "Petrol",
      title: "Bentley Continental V8 S",
      year: 2021,
      brand: "Bentley",
      model: "Continental V8 S",
      power: 507,
      src: "https://static.wixstatic.com/media/bd4349_7a1cd772df5e45479c8e1073793af2ff~mv2.jpg/v1/fill/w_776,h_638,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bd4349_7a1cd772df5e45479c8e1073793af2ff~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.bentleymotors.com/en/models/continental-gt/continental-gt-speed.html",
      content: () => {
        return (
          <p>
            The Bentley Continental V8 S is a high-performance grand tourer that combines 
            luxury with exhilarating power. With a 4.0-liter twin-turbo V8 engine producing 
            507 horsepower, the Continental V8 S offers a thrilling driving experience. <br /> <br /> 
            Its elegant design, sumptuous interior, and advanced technology make it the perfect 
            choice for those seeking a blend of performance and sophistication.
          </p>
        );
      },
    },
    {
      id: 20,
      description: "Petrol",
      title: "Ferrari Roma",
      year: 2021,
      brand: "Ferrari",
      model: "Roma",
      power: 620,
      src: "https://static.wixstatic.com/media/bd4349_8b940606bbc144acb88331f3f81017d4~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_8b940606bbc144acb88331f3f81017d4~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.ferrari.com/en-US/auto/ferrari-roma",
      content: () => {
        return (
          <p>
            The Ferrari Roma is a stunning grand touring coupe that combines timeless design 
            with modern performance. With a 3.9-liter twin-turbo V8 producing 620 horsepower, 
            the Roma offers blistering acceleration and sharp handling. <br /> <br /> Its sleek, 
            minimalist design is a tribute to Ferrari&apos;s heritage, making the Roma one of the 
            most visually captivating and exhilarating cars to drive.
          </p>
        );
      },
    },
    {
      id: 21,
      description: "Petrol",
      title: "Range Rover Sport SV P635",
      year: 2021,
      brand: "Land Rover",
      model: "Range Rover Sport SV P635",
      power: 635,
      src: "https://static.wixstatic.com/media/bd4349_dc13f18235b74a0198d49997887c8bfb~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_dc13f18235b74a0198d49997887c8bfb~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.landrover.com/vehicles/range-rover-sport/index.html",
      content: () => {
        return (
          <p>
            The Range Rover Sport SV P635 is a high-performance luxury SUV that brings power and 
            sophistication to every journey. Powered by a 5.0-liter supercharged V8 engine, it delivers 
            635 horsepower. <br /> <br /> The SV P635 blends Land Rover&apos;s legendary off-road capabilities 
            with a luxurious interior and advanced technology, making it a formidable SUV both on and 
            off the road.
          </p>
        );
      },
    },
    {
      id: 22,
      description: "Petrol",
      title: "Porsche 718 Spyder RS",
      year: 2021,
      brand: "Porsche",
      model: "718 Spyder RS",
      power: 500,
      src: "https://static.wixstatic.com/media/bd4349_96869a4b367942e7bb0e929142864ce9~mv2.png/v1/fill/w_1552,h_1276,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/bd4349_96869a4b367942e7bb0e929142864ce9~mv2.png",
      ctaText: "Learn More",
      ctaLink: "https://www.porsche.com/usa/models/718/718-spyder-rs/",
      content: () => {
        return (
          <p>
            The Porsche 718 Spyder RS is a lightweight, high-performance roadster designed for pure driving 
            pleasure. With its 4.0-liter flat-six engine producing 500 horsepower, the Spyder RS offers 
            incredible agility and speed. <br /> <br /> Its convertible design, combined with Porsche&apos;s 
            engineering prowess, makes it a thrilling choice for open-top driving enthusiasts.
          </p>
        );
      },
    },
    {
      id: 23,
      description: "Petrol",
      title: "Porsche 718 GT4 RS",
      year: 2021,
      brand: "Porsche",
      model: "718 GT4 RS",
      power: 500,
      src: "https://static.wixstatic.com/media/bd4349_29da8c839ad141b189ff35a4ba47904a~mv2.jpg/v1/fill/w_1552,h_1276,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd4349_29da8c839ad141b189ff35a4ba47904a~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.porsche.com/usa/models/718/718-cayman-gt4-rs/",
      content: () => {
        return (
          <p>
            The Porsche 718 GT4 RS is a race-bred sports car that delivers outstanding performance 
            on both the track and the road. Powered by a 4.0-liter flat-six engine generating 500 horsepower, 
            the GT4 RS is engineered for precision and speed. <br /> <br /> Its aerodynamic design and 
            advanced suspension system make it one of the most track-capable models in the Porsche lineup.
          </p>
        );
      },
    },
    {
      id: 24,
      title : "Mercedes - GT53 AMG",
      year: 2021,
      brand: "Mercedes",
      model: "GT53 AMG",
      power: 457,
      cylinders: 6,
      displacement: 3.0,
      drive: "AWD",
      max_speed: "285",
      zero_to_100: "4.5",
      price : "€120,000",
      src : "https://static.wixstatic.com/media/bd4349_ff219b2632ba4623b7b3b0770cf2506a~mv2.jpg/v1/fill/w_776,h_638,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bd4349_ff219b2632ba4623b7b3b0770cf2506a~mv2.jpg",
      ctaText: "Learn More",
      ctaLink: "https://www.mercedes-benz.fr/passengercars/models/coupe/amg-gt-4-door/overview.html",
      content: () => {
        return (
          <p>
            The Mercedes GT53 AMG is a high-performance luxury coupe that combines elegance with 
            exhilarating power. With a 3.0-liter inline-6 engine and EQ Boost technology, it delivers 
            457 horsepower and 520 lb-ft of torque. <br /> <br /> Its sleek design, advanced technology, 
            and refined interior make it the perfect choice for those seeking a sports car that offers 
            both comfort and performance.
          </p>
        );
      }
    }
];
