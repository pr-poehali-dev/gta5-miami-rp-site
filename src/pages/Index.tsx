import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAnyPayDonate = (amount: string) => {
    // Any Pay integration code will be here
    alert(`Переход на оплату ${amount} рублей через Any Pay`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-miami-black via-miami-purple/20 to-miami-black text-foreground">
      {/* Header with Logo */}
      <header className="relative overflow-hidden border-b border-miami-cyan/20">
        <div className="absolute inset-0 bg-gradient-to-r from-miami-orange/10 to-miami-cyan/10"></div>
        <div className="relative container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-6xl font-black neon-text animate-neon-pulse" style={{fontFamily: 'Orbitron'}}>
                M
              </div>
              <div>
                <h1 className="text-2xl font-bold text-miami-cyan">GTA 5 MIAMI RP</h1>
                <p className="text-sm text-muted-foreground">Лучший RP сервер</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-2">
              <div className="w-4 h-4 rounded-full animate-police-lights"></div>
              <div className="w-4 h-4 rounded-full animate-police-lights" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-miami-cyan/20 bg-card/50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b-0 h-auto p-0">
              <TabsTrigger 
                value="home" 
                className="data-[state=active]:bg-miami-cyan/20 data-[state=active]:text-miami-cyan border-b-2 border-transparent data-[state=active]:border-miami-cyan rounded-none px-6 py-3"
              >
                <Icon name="Home" className="w-4 h-4 mr-2" />
                Главная
              </TabsTrigger>
              <TabsTrigger 
                value="donate" 
                className="data-[state=active]:bg-miami-orange/20 data-[state=active]:text-miami-orange border-b-2 border-transparent data-[state=active]:border-miami-orange rounded-none px-6 py-3"
              >
                <Icon name="CreditCard" className="w-4 h-4 mr-2" />
                Донат
              </TabsTrigger>
              <TabsTrigger 
                value="forum" 
                className="data-[state=active]:bg-miami-gold/20 data-[state=active]:text-miami-gold border-b-2 border-transparent data-[state=active]:border-miami-gold rounded-none px-6 py-3"
              >
                <Icon name="MessageSquare" className="w-4 h-4 mr-2" />
                Форум
              </TabsTrigger>
              <TabsTrigger 
                value="about" 
                className="data-[state=active]:bg-miami-cyan/20 data-[state=active]:text-miami-cyan border-b-2 border-transparent data-[state=active]:border-miami-cyan rounded-none px-6 py-3"
              >
                <Icon name="Info" className="w-4 h-4 mr-2" />
                О нас
              </TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="mt-0">
              {/* Hero Section with Police Animation */}
              <div className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-miami-cyan/5 to-miami-orange/5"></div>
                <div className="relative container mx-auto px-4">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h2 className="text-5xl font-black text-miami-cyan neon-text animate-fade-in">
                        ДОБРО ПОЖАЛОВАТЬ В
                        <span className="block text-miami-orange">MIAMI RP</span>
                      </h2>
                      <p className="text-xl text-muted-foreground">
                        Лучший GTA 5 RolePlay сервер с уникальной атмосферой Майами. 
                        Живи жизнью мечты в городе неоновых огней!
                      </p>
                      <div className="flex space-x-4">
                        <Button className="gta-button text-black font-bold px-8 py-3">
                          <Icon name="Play" className="w-5 h-5 mr-2" />
                          ИГРАТЬ СЕЙЧАС
                        </Button>
                        <Button variant="outline" className="border-miami-cyan text-miami-cyan hover:bg-miami-cyan/20 px-8 py-3">
                          <Icon name="Users" className="w-5 h-5 mr-2" />
                          Discord
                        </Button>
                      </div>
                    </div>
                    
                    {/* Animated Police Scene */}
                    <div className="relative h-80 bg-gradient-to-b from-miami-cyan/10 to-miami-orange/10 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Police Car with Lights */}
                        <div className="relative">
                          <div className="w-32 h-16 bg-gradient-to-r from-white to-gray-200 rounded-lg relative shadow-lg">
                            <div className="absolute top-1 left-2 w-2 h-2 bg-red-500 rounded-full animate-police-lights"></div>
                            <div className="absolute top-1 right-2 w-2 h-2 bg-blue-500 rounded-full animate-police-lights" style={{animationDelay: '0.5s'}}></div>
                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black">POLICE</div>
                          </div>
                        </div>
                        
                        {/* Police Officer */}
                        <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
                          <div className="w-8 h-12 bg-blue-800 rounded-t-lg relative">
                            <div className="w-6 h-6 bg-yellow-200 rounded-full absolute -top-3 left-1"></div>
                            <div className="absolute -right-4 top-2 text-2xl">🔫</div>
                          </div>
                        </div>
                        
                        {/* Animated Bullet */}
                        {isAnimating && (
                          <div className="absolute right-16 top-1/2 w-1 h-1 bg-miami-gold rounded-full animate-bullet-fly"></div>
                        )}
                        
                        {/* Criminal */}
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <div className="w-8 h-12 bg-gray-800 rounded-t-lg relative">
                            <div className="w-6 h-6 bg-yellow-200 rounded-full absolute -top-3 left-1"></div>
                            <div className="absolute -left-2 top-2 text-sm">💼</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 text-sm text-muted-foreground">
                        🚨 Полицейские патрули 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="py-16 bg-card/20">
                <div className="container mx-auto px-4">
                  <h3 className="text-3xl font-bold text-center mb-12 text-miami-cyan">ОСОБЕННОСТИ СЕРВЕРА</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="bg-card/50 border-miami-cyan/30">
                      <CardHeader>
                        <CardTitle className="flex items-center text-miami-cyan">
                          <Icon name="Shield" className="w-6 h-6 mr-2" />
                          Полиция
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Присоединяйтесь к полицейским силам Майами и поддерживайте порядок в городе</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50 border-miami-orange/30">
                      <CardHeader>
                        <CardTitle className="flex items-center text-miami-orange">
                          <Icon name="Car" className="w-6 h-6 mr-2" />
                          Автопарк
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Огромный выбор автомобилей: от спорткаров до мотоциклов</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50 border-miami-gold/30">
                      <CardHeader>
                        <CardTitle className="flex items-center text-miami-gold">
                          <Icon name="Building" className="w-6 h-6 mr-2" />
                          Недвижимость
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Покупайте дома, квартиры и офисы в самом сердце Майами</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="donate" className="mt-0">
              <div className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="text-4xl font-bold text-center mb-12 text-miami-orange">ПОДДЕРЖАТЬ ПРОЕКТ</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { amount: '100', title: 'Начальный', perks: ['VIP статус на 7 дней', '50,000$ в игре', 'Особый транспорт'] },
                      { amount: '500', title: 'Продвинутый', perks: ['VIP статус на 30 дней', '200,000$ в игре', 'Эксклюзивные авто', 'Премиум дом'] },
                      { amount: '1000', title: 'Элитный', perks: ['VIP статус на 90 дней', '500,000$ в игре', 'Все авто', 'Элитная недвижимость', 'Особые привилегии'] }
                    ].map((pack, index) => (
                      <Card key={index} className="bg-card/50 border-miami-orange/30 hover:border-miami-orange/60 transition-all">
                        <CardHeader>
                          <CardTitle className="text-2xl text-miami-orange">{pack.title}</CardTitle>
                          <div className="text-3xl font-bold text-miami-gold">{pack.amount} ₽</div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 mb-6">
                            {pack.perks.map((perk, i) => (
                              <li key={i} className="flex items-center text-sm">
                                <Icon name="Check" className="w-4 h-4 mr-2 text-miami-cyan" />
                                {perk}
                              </li>
                            ))}
                          </ul>
                          <Button 
                            className="w-full gta-button text-black font-bold"
                            onClick={() => handleAnyPayDonate(pack.amount)}
                          >
                            Купить через Any Pay
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="forum" className="mt-0">
              <div className="py-16 text-center">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold mb-8 text-miami-gold">ФОРУМ СООБЩЕСТВА</h2>
                  <p className="text-xl text-muted-foreground mb-8">Присоединяйтесь к обсуждениям, задавайте вопросы и делитесь опытом</p>
                  <div className="max-w-md mx-auto space-y-4">
                    <Input placeholder="Ссылка на форум" className="bg-input border-miami-gold/30" />
                    <Button className="w-full gta-button text-black font-bold" size="lg">
                      <Icon name="ExternalLink" className="w-5 h-5 mr-2" />
                      Перейти на форум
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about" className="mt-0">
              <div className="py-16">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold text-center mb-12 text-miami-cyan">О НАС</h2>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-miami-orange">MIAMI RP - ваш мир возможностей</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Добро пожаловать в самый атмосферный GTA 5 RolePlay сервер! 
                        Мы создали уникальный мир, где каждый игрок может прожить свою мечту в солнечном Майами.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Наша команда разработчиков и администраторов работает 24/7, 
                        чтобы обеспечить вам лучший игровой опыт. Присоединяйтесь к тысячам игроков уже сегодня!
                      </p>
                      <div className="space-y-4">
                        <div className="aspect-video bg-gradient-to-r from-miami-cyan/10 to-miami-orange/10 rounded-lg flex items-center justify-center border border-miami-cyan/30">
                          <div className="text-center">
                            <Icon name="Play" className="w-16 h-16 mx-auto mb-4 text-miami-cyan" />
                            <p className="text-muted-foreground">Место для вашего видео</p>
                            <Textarea 
                              placeholder="Вставьте ссылку на видео или embed код"
                              className="mt-4 bg-input border-miami-cyan/30"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <Card className="bg-card/50 border-miami-cyan/30">
                        <CardHeader>
                          <CardTitle className="text-miami-cyan">Статистика сервера</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between">
                            <span>Онлайн игроков:</span>
                            <span className="text-miami-gold font-bold">247/300</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Зарегистрировано:</span>
                            <span className="text-miami-gold font-bold">15,847</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Время работы:</span>
                            <span className="text-miami-gold font-bold">24/7</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </nav>

      {/* Footer with Legal Documents */}
      <footer className="border-t border-miami-cyan/20 bg-card/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Dialog>
              <DialogTrigger className="hover:text-miami-cyan transition-colors cursor-pointer">
                Политика конфиденциальности
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Политика конфиденциальности</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm">
                  <p>Мы серьёзно относимся к защите ваших персональных данных...</p>
                  <p>При регистрации на сервере мы собираем минимально необходимую информацию...</p>
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger className="hover:text-miami-orange transition-colors cursor-pointer">
                Правила оферты
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Правила оферты</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm">
                  <p>Данная оферта регулирует отношения между администрацией сервера и игроками...</p>
                  <p>Приобретая игровые услуги, вы соглашаетесь с условиями...</p>
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger className="hover:text-miami-gold transition-colors cursor-pointer">
                Условия возврата и оплаты
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Условия возврата и оплаты</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm">
                  <p>Возврат средств производится в соответствии с правилами...</p>
                  <p>Оплата принимается через Any Pay и другие системы...</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="text-center mt-6 text-muted-foreground text-sm">
            <p>&copy; 2024 GTA 5 Miami RP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;