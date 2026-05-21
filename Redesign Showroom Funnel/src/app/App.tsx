import { Phone, MapPin, Clock, Award, Shield, Heart, ChevronRight, Calendar, Sofa, Armchair, Bed } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";

export default function App() {
  const heroRef = useRef(null);
  const ctaRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0]);
  const ctaY = useTransform(ctaScrollProgress, [0, 1], ["20%", "-20%"]);
  const showrooms = [
    {
      name: "Младост",
      address: "София 1750, Младост 1А, бл. 554",
      phone: "087 944 4105",
      hours: "Пон-Пет: 11:00-19:00 | Съб: 11:00-18:00 | Нед: 11:00-17:00"
    },
    {
      name: "Красно село",
      address: "Красно село 1612, ул. Житница 21",
      phone: "0896 75 88 24",
      hours: "Пон-Пет: 11:00-19:00 | Съб: 11:00-18:00 | Нед: 11:00-17:00"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "30 месеца гаранция",
      description: "Фабрична гаранция на всички продукти"
    },
    {
      icon: Shield,
      title: "Доживотен сервиз",
      description: "Грижим се за мебелите ви винаги"
    },
    {
      icon: Heart,
      title: "Направено в България",
      description: "Висококачествено производство"
    }
  ];

  const featuredProducts = [
    {
      image: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?w=1200",
      title: "Луксозни холни комплекти",
      description: "Модерен дизайн и изключителен комфорт"
    },
    {
      image: "https://images.unsplash.com/photo-1680503146454-0fe569cef4eb?w=1200",
      title: "Модулни дивани",
      description: "Разгъваеми с ротационен механизъм"
    }
  ];

  const categories = [
    {
      icon: Sofa,
      name: "Дивани",
      image: "https://images.unsplash.com/photo-1778996369592-f8ea076da4eb?w=600",
      count: "50+ модела"
    },
    {
      icon: Armchair,
      name: "Фотьойли",
      image: "https://images.unsplash.com/photo-1768332572728-2fff6ecbd6b6?w=600",
      count: "30+ модела"
    },
    {
      icon: Bed,
      name: "Легла",
      image: "https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?w=600",
      count: "40+ модела"
    }
  ];

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  const scrollToLocations = () => {
    document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Sticky Contact Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex gap-2">
          <motion.div className="flex-1" whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => handleCall("087 944 4105")}
              className="w-full bg-gray-900 hover:bg-gray-800"
            >
              <Phone className="mr-2 h-4 w-4" />
              Обади се
            </Button>
          </motion.div>
          <motion.div className="flex-1" whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="w-full border-gray-900 text-gray-900 hover:bg-gray-50"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Запази час
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[700px] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1687180497278-ca4d736ecc99?w=1920')",
            y: heroY
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </motion.div>
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-2xl">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Вашият перфектен диван ви очаква
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Почувствайте качеството лично. Посетете нашите шоурумове и намерете мебелта, която ще обичате години наред.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => handleCall("087 944 4105")}
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 hover:scale-105 transition-transform"
              >
                <Phone className="mr-2 h-5 w-5" />
                Обади се сега
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToLocations}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 text-lg px-8 py-6 hover:scale-105 transition-transform"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Виж локации
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Featured Products - Split Layout */}
      <div className="grid md:grid-cols-2">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={index}
            className="relative h-[500px] overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <motion.div
                className="p-8 md:p-12 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-3">{product.title}</h3>
                <p className="text-lg text-gray-200 mb-4">{product.description}</p>
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all hover:scale-105">
                  Разгледай <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Защо да изберете Canappe?
            </h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-white border-0 h-full">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <benefit.icon className="h-16 w-16 text-gray-900 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-lg">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Разгледайте нашите категории
            </h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="relative h-[400px] overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center justify-end p-8">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="h-12 w-12 text-white mb-4" />
                  </motion.div>
                  <motion.h3
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  >
                    {category.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-200 text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    {category.count}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Image CTA */}
      <div ref={ctaRef} className="relative h-[600px] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1740759546813-6b58d44f5dce?w=1920"
          alt="Showroom"
          className="w-full h-full object-cover"
          style={{ y: ctaY }}
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Готови да намерите вашата мебел?
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Нашите експерти са тук, за да ви помогнат да изберете перфектното решение за вашия дом.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => handleCall("087 944 4105")}
                  className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-7"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  087 944 4105
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => handleCall("0896 75 88 24")}
                  className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-7"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  0896 75 88 24
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Showroom Locations */}
      <div id="locations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Посетете нашите шоурумове
            </h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-2 gap-12">
            {showrooms.map((showroom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden border-0 shadow-xl h-full">
                  <div className="relative h-[300px] overflow-hidden">
                    <motion.img
                      src={index === 0
                        ? "https://images.unsplash.com/photo-1669213448793-b2152ba5ec67?w=800"
                        : "https://images.unsplash.com/photo-1687180497716-5872969e5125?w=800"
                      }
                      alt={showroom.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute top-4 left-4 bg-white px-6 py-3 rounded-full"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900">
                        {showroom.name}
                      </h3>
                    </motion.div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-5">
                      <motion.div
                        className="flex items-start gap-4"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      >
                        <MapPin className="h-6 w-6 text-gray-900 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-lg">{showroom.address}</p>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      >
                        <Phone className="h-6 w-6 text-gray-900 flex-shrink-0" />
                        <a
                          href={`tel:${showroom.phone.replace(/\s/g, '')}`}
                          className="text-gray-900 hover:text-gray-600 font-bold text-xl"
                        >
                          {showroom.phone}
                        </a>
                      </motion.div>
                      <motion.div
                        className="flex items-start gap-4"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                      >
                        <Clock className="h-6 w-6 text-gray-900 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-lg">{showroom.hours}</p>
                      </motion.div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => handleCall(showroom.phone)}
                        className="w-full mt-8 bg-gray-900 hover:bg-gray-800 text-lg py-6"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Позвъни сега
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Повече от просто мебели
              </motion.h2>
              <div className="space-y-4 text-lg text-gray-300">
                {[
                  "Безплатна доставка до вашия град",
                  "Финансиране до 6 месеца без лихви",
                  "Персонална консултация в шоурума",
                  "Широк избор от тъкани и цветове"
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.span
                      className="text-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      ✓
                    </motion.span>
                    {text}
                  </motion.p>
                ))}
              </div>
            </div>
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1762803841262-99261e8ff08a?w=800"
                alt="Quality furniture"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-8">
              <motion.h3
                className="text-3xl font-bold mb-4"
                whileHover={{ scale: 1.1 }}
              >
                Canappe
              </motion.h3>
              <p className="text-gray-400 text-lg mb-8">
                Мултифункционална модулна мебел за вашия дом
              </p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-3xl mx-auto">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-gray-400 mb-2">Младост</p>
                <p className="font-semibold">087 944 4105</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-gray-400 mb-2">Красно село</p>
                <p className="font-semibold">0896 75 88 24</p>
              </motion.div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.4}>
            <div className="flex justify-center gap-8 mb-8">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg"
                whileHover={{ scale: 1.2, y: -5 }}
              >
                Facebook
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg"
                whileHover={{ scale: 1.2, y: -5 }}
              >
                Instagram
              </motion.a>
            </div>
          </FadeInWhenVisible>
          <div className="text-center">
            <p className="text-gray-500">
              © 2026 Canappe. Всички права запазени.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}