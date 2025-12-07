import { ChefHat, MapPin, Clock, Phone, Utensils, Heart, Facebook, Instagram, Twitter } from 'lucide-react'

// Componentes definidos inline en el mismo archivo
const Navigation_component = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-text font-heading">Sabor Ecuatoriano</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-text hover:text-primary transition-colors">Inicio</a>
            <a href="#menu" className="text-text hover:text-primary transition-colors">Menú</a>
            <a href="#nosotros" className="text-text hover:text-primary transition-colors">Nosotros</a>
            <a href="#contacto" className="text-text hover:text-primary transition-colors">Contacto</a>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Reservar
            </button>
          </div>
          
          <button className="md:hidden">
            <Utensils className="w-6 h-6 text-text" />
          </button>
        </div>
      </div>
    </nav>
  )
}

const Hero_section = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-0" />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 font-heading">
            Auténtica <span className="text-primary">Comida Criolla</span> Ecuatoriana
          </h1>
          <p className="text-lg md:text-xl text-text/80 mb-8">
            Descubre los sabores tradicionales de Ecuador preparados con ingredientes frescos 
            y recetas transmitidas por generaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Ver Menú Especial
            </button>
            <button className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-colors">
              Reservar Mesa
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

const Features_section = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Chefs Expertos",
      description: "Nuestros chefs dominan las técnicas tradicionales ecuatorianas"
    },
    {
      icon: MapPin,
      title: "Ubicación Central",
      description: "En el corazón de la ciudad, fácil acceso para todos"
    },
    {
      icon: Clock,
      title: "Horario Extendido",
      description: "Abierto de 11am a 11pm, todos los días"
    },
    {
      icon: Phone,
      title: "Reservas Fáciles",
      description: "Reserva por teléfono o a través de nuestra web"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 font-heading">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Combinamos tradición, calidad y servicio excepcional para ofrecerte 
            una experiencia gastronómica única.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-2 font-heading">
                {feature.title}
              </h3>
              <p className="text-text/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Footer_component = () => {
  return (
    <footer className="bg-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold font-heading">Sabor Ecuatoriano</span>
            </div>
            <p className="text-white/80 mb-4">
              Auténtica comida criolla ecuatoriana preparada con amor y tradición.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Horarios</h3>
            <div className="space-y-2 text-white/80">
              <p>Lunes a Viernes: 11:00 - 23:00</p>
              <p>Sábados: 11:00 - 00:00</p>
              <p>Domingos: 11:00 - 22:00</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Contacto</h3>
            <div className="space-y-2 text-white/80">
              <p>Av. Amazonas N45-12</p>
              <p>Quito, Ecuador</p>
              <p>Tel: +593 2 123 4567</p>
              <p>info@saborecuatoriano.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Sabor Ecuatoriano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation_component />
      <Hero_section />
      <Features_section />
      <Footer_component />
    </main>
  )
}