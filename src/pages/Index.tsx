import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Store' },
    { id: 'football', name: 'Футбол', icon: 'CircleDot' },
    { id: 'basketball', name: 'Баскетбол', icon: 'CircleDot' },
    { id: 'running', name: 'Бег', icon: 'Footprints' },
    { id: 'fitness', name: 'Фитнес', icon: 'Dumbbell' },
    { id: 'swimming', name: 'Плавание', icon: 'Waves' },
  ];

  const products = [
    {
      id: 1,
      name: 'Профессиональный футбольный мяч',
      category: 'football',
      price: '2 990 ₽',
      image: '/placeholder.svg',
      badge: 'Хит продаж',
    },
    {
      id: 2,
      name: 'Баскетбольные кроссовки Premium',
      category: 'basketball',
      price: '8 990 ₽',
      image: '/placeholder.svg',
      badge: 'Новинка',
    },
    {
      id: 3,
      name: 'Беговые кроссовки с амортизацией',
      category: 'running',
      price: '6 490 ₽',
      image: '/placeholder.svg',
    },
    {
      id: 4,
      name: 'Набор гантелей 2х5 кг',
      category: 'fitness',
      price: '3 490 ₽',
      image: '/placeholder.svg',
    },
    {
      id: 5,
      name: 'Очки для плавания профи',
      category: 'swimming',
      price: '1 290 ₽',
      image: '/placeholder.svg',
      badge: 'Скидка',
    },
    {
      id: 6,
      name: 'Футбольные бутсы Elite',
      category: 'football',
      price: '7 990 ₽',
      image: '/placeholder.svg',
    },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <header className="bg-accent text-accent-foreground sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={32} className="text-primary" />
              <span className="text-2xl font-bold">СПОРТ-ЛИДЕР</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#catalog" className="hover:text-primary transition-colors">
                Каталог
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                О магазине
              </a>
              <a href="#contacts" className="hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
            <Button size="sm" className="hidden md:flex">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20 md:py-32 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              🔥 Новая коллекция 2024
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Достигай новых{' '}
              <span className="text-primary">вершин</span> вместе с нами!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Профессиональная экипировка для всех видов спорта. Качество,
              проверенное чемпионами.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-10 text-primary/20 hidden lg:block">
          <Icon name="Trophy" size={200} />
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Наш <span className="text-primary">каталог</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор товаров для профессионалов и любителей
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className="transition-all hover:scale-105"
              >
                <Icon name={cat.icon} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              О <span className="text-secondary">магазине</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы помогаем спортсменам достигать максимальных результатов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Качество</h3>
              <p className="text-muted-foreground">
                Только сертифицированные товары от проверенных производителей
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Icon name="Truck" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Доставка</h3>
              <p className="text-muted-foreground">
                Быстрая доставка по всей России. Бесплатно от 5000 ₽
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name="ThumbsUp" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Гарантия</h3>
              <p className="text-muted-foreground">
                Официальная гарантия на все товары и возврат в течение 30 дней
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-primary">Контакты</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card className="p-6 h-full">
                  <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Адрес</p>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Спортивная, д. 15
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">info@sport-leader.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Часы работы</p>
                        <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <Card className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Textarea placeholder="Ваше сообщение" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={28} className="text-primary" />
                <span className="text-xl font-bold">СПОРТ-ЛИДЕР</span>
              </div>
              <p className="text-muted-foreground">
                Ваш надежный партнер в мире спорта
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#home" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">О магазине</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>© 2024 СПОРТ-ЛИДЕР. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
