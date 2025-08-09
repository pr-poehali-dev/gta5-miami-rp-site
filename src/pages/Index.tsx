import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Logo from '@/components/ui/logo';
import AnyPay from '@/components/ui/anypay';

const Index = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleForumRedirect = () => {
    // Здесь можно вставить ссылку на форум
    window.open('https://forum.miami-rp.com', '_blank');
  };

  const handleTextHover = (text: string) => {
    setAnimatedText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-miami-black via-miami-purple/20 to-miami-black text-foreground">
      {/* Header with Logo */}
      <header className="relative overflow-hidden border-b border-miami-cyan/20">
        <div className="absolute inset-0 bg-gradient-to-r from-miami-cyan/5 via-miami-orange/10 to-miami-gold/5"></div>
        <div className="relative container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo size="lg" />
              <div>
                <h1 className="text-3xl font-black text-miami-cyan neon-text">MIAMI RP</h1>
                <p className="text-sm text-miami-orange">GTA 5 RolePlay Server</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-miami-cyan text-miami-cyan hover:bg-miami-cyan/20">
                <Icon name="Users" className="w-4 h-4 mr-2" />
                Онлайн: 247/300
              </Button>
              <Button className="gta-button text-black font-bold">
                <Icon name="Play" className="w-4 h-4 mr-2" />
                ПОДКЛЮЧИТЬСЯ
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-miami-black/50 border border-miami-cyan/30">
            <TabsTrigger 
              value="home"
              className="data-[state=active]:bg-miami-cyan data-[state=active]:text-black font-bold"
              onMouseEnter={() => handleTextHover('🏠 Главная страница сервера')}
              onMouseLeave={() => setAnimatedText('')}
            >
              <Icon name="Home" className="w-4 h-4 mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger 
              value="donate"
              className="data-[state=active]:bg-miami-gold data-[state=active]:text-black font-bold"
              onMouseEnter={() => handleTextHover('💳 Поддержать сервер донатом')}
              onMouseLeave={() => setAnimatedText('')}
            >
              <Icon name="CreditCard" className="w-4 h-4 mr-2" />
              Донат
            </TabsTrigger>
            <TabsTrigger 
              value="forum"
              className="data-[state=active]:bg-miami-orange data-[state=active]:text-black font-bold"
              onMouseEnter={() => handleTextHover('💬 Перейти на форум сообщества')}
              onMouseLeave={() => setAnimatedText('')}
              onClick={handleForumRedirect}
            >
              <Icon name="MessageSquare" className="w-4 h-4 mr-2" />
              Форум
            </TabsTrigger>
            <TabsTrigger 
              value="about"
              className="data-[state=active]:bg-miami-purple data-[state=active]:text-black font-bold"
              onMouseEnter={() => handleTextHover('ℹ️ Узнать больше о нас')}
              onMouseLeave={() => setAnimatedText('')}
            >
              <Icon name="Info" className="w-4 h-4 mr-2" />
              О нас
            </TabsTrigger>
          </TabsList>

          {/* Animated Text Display */}
          {animatedText && (
            <div className="text-center">
              <p className="text-miami-cyan animate-pulse font-medium">{animatedText}</p>
            </div>
          )}

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
                  
                  {/* Enhanced Animated Police Scene */}
                  <div className="relative h-80 bg-gradient-to-b from-miami-cyan/10 to-miami-orange/10 rounded-lg overflow-hidden border border-miami-cyan/30">
                    <div className="absolute inset-0">
                      {/* Police Car */}
                      <div className="absolute left-8 bottom-8">
                        <img 
                          src="/img/bc7bc2eb-bec4-4bd7-92b5-4c8c588a223a.jpg" 
                          alt="GTA 5 Police Car"
                          className="w-48 h-32 object-cover rounded-lg shadow-2xl border-2 border-white/20"
                        />
                        {/* Police Lights Animation */}
                        <div className="absolute top-2 left-4 w-3 h-3 bg-red-500 rounded-full animate-police-lights shadow-lg shadow-red-500/50"></div>
                        <div className="absolute top-2 right-4 w-3 h-3 bg-blue-500 rounded-full animate-police-lights shadow-lg shadow-blue-500/50" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute top-2 left-8 w-2 h-2 bg-red-500 rounded-full animate-police-lights" style={{animationDelay: '0.25s'}}></div>
                        <div className="absolute top-2 right-8 w-2 h-2 bg-blue-500 rounded-full animate-police-lights" style={{animationDelay: '0.75s'}}></div>
                      </div>
                      
                      {/* Police Officer */}
                      <div className="absolute right-32 bottom-8">
                        <img 
                          src="/img/8c17fca5-2945-49cc-947e-c2191074c384.jpg" 
                          alt="GTA 5 Police Officer"
                          className={`w-24 h-32 object-cover rounded-lg shadow-2xl border-2 border-blue-500/30 transition-transform duration-200 ${isAnimating ? 'animate-bounce' : ''}`}
                        />
                        {/* Gun Flash Effect */}
                        {isAnimating && (
                          <div className="absolute right-2 top-12 w-6 h-6 bg-yellow-400 rounded-full opacity-90 animate-ping blur-sm"></div>
                        )}
                      </div>
                      
                      {/* Enhanced Animated Bullet */}
                      {isAnimating && (
                        <>
                          <div className="absolute right-28 bottom-20 w-3 h-2 bg-miami-gold rounded-full animate-bullet-fly shadow-lg shadow-miami-gold/50">
                            <div className="absolute inset-0 bg-miami-gold blur-sm animate-pulse"></div>
                            <div className="absolute -left-2 top-0 w-2 h-2 bg-orange-500 rounded-full blur-sm"></div>
                          </div>
                          {/* Bullet Trail */}
                          <div className="absolute right-30 bottom-20 w-8 h-1 bg-gradient-to-r from-transparent via-miami-gold/50 to-miami-gold animate-bullet-trail"></div>
                        </>
                      )}
                      
                      {/* Criminal */}
                      <div className="absolute right-8 bottom-8">
                        <img 
                          src="/img/eaa386ba-9969-4602-bdf4-43a0d5383225.jpg" 
                          alt="GTA 5 Criminal"
                          className={`w-20 h-32 object-cover rounded-lg shadow-2xl border-2 border-red-500/30 transition-transform duration-300 ${isAnimating ? 'animate-pulse' : ''}`}
                        />
                        {/* Money bag animation */}
                        <div className="absolute -left-3 top-8 text-2xl animate-bounce">💰</div>
                      </div>
                      
                      {/* Enhanced Muzzle Flash Effect */}
                      {isAnimating && (
                        <>
                          <div className="absolute right-24 bottom-24 w-6 h-6 bg-miami-gold rounded-full opacity-80 animate-ping"></div>
                          <div className="absolute right-25 bottom-25 w-4 h-4 bg-orange-500 rounded-full opacity-60 animate-ping" style={{animationDelay: '0.1s'}}></div>
                          <div className="absolute right-26 bottom-26 w-2 h-2 bg-yellow-300 rounded-full opacity-40 animate-ping" style={{animationDelay: '0.2s'}}></div>
                        </>
                      )}
                    </div>
                    
                    <div className="absolute bottom-4 left-4 text-sm text-muted-foreground bg-black/70 px-3 py-2 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center space-x-2">
                        <Icon name="AlertCircle" className="w-4 h-4 text-red-500" />
                        <span>🚨 Полицейские патрули 24/7</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 text-xs text-miami-cyan bg-black/70 px-3 py-1 rounded backdrop-blur-sm border border-miami-cyan/30">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="font-bold">LIVE ACTION</span>
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 text-xs text-miami-orange bg-black/70 px-3 py-1 rounded backdrop-blur-sm border border-miami-orange/30">
                      <span className="font-bold">⚡ HIGH CRIME ZONE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="py-16 bg-card/20 rounded-lg border border-miami-cyan/20">
              <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-12 text-miami-cyan neon-text">ОСОБЕННОСТИ СЕРВЕРА</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-miami-cyan/30 bg-miami-black/50 backdrop-blur-sm hover:border-miami-cyan transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-miami-cyan">
                        <Icon name="Car" className="w-6 h-6 mr-3" />
                        Уникальные машины
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Более 200 эксклюзивных автомобилей с реалистичной физикой и кастомизацией</p>
                    </CardContent>
                  </Card>

                  <Card className="border-miami-orange/30 bg-miami-black/50 backdrop-blur-sm hover:border-miami-orange transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-miami-orange">
                        <Icon name="Users" className="w-6 h-6 mr-3" />
                        Активное сообщество
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Дружелюбные игроки и опытные администраторы всегда готовы помочь</p>
                    </CardContent>
                  </Card>

                  <Card className="border-miami-gold/30 bg-miami-black/50 backdrop-blur-sm hover:border-miami-gold transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-miami-gold">
                        <Icon name="Zap" className="w-6 h-6 mr-3" />
                        Быстрые обновления
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Регулярные обновления и новые функции каждую неделю</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="donate">
            <AnyPay />
          </TabsContent>

          <TabsContent value="about">
            <div className="space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-black text-miami-cyan neon-text">О НАС</h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  Miami RP - это не просто сервер, это целый мир возможностей в атмосфере солнечной Флориды
                </p>
              </div>

              {/* Video Section */}
              <div className="bg-card/20 rounded-lg border border-miami-cyan/20 p-8">
                <h3 className="text-2xl font-bold text-miami-orange mb-6 text-center">ТРЕЙЛЕР СЕРВЕРА</h3>
                <div className="aspect-video bg-miami-black/50 rounded-lg flex items-center justify-center border-2 border-dashed border-miami-cyan/30">
                  <div className="text-center space-y-4">
                    <Icon name="Play" className="w-16 h-16 text-miami-cyan mx-auto" />
                    <p className="text-muted-foreground">Здесь можно разместить видео о сервере</p>
                    <Button className="gta-button text-black font-bold">
                      <Icon name="Youtube" className="w-4 h-4 mr-2" />
                      ЗАГРУЗИТЬ ВИДЕО
                    </Button>
                  </div>
                </div>
              </div>

              {/* About Content */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-miami-cyan/30 bg-miami-black/50">
                  <CardHeader>
                    <CardTitle className="text-miami-cyan">
                      <Icon name="Target" className="w-6 h-6 mr-3" />
                      НАША МИССИЯ
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Создать лучший опыт RolePlay в GTA 5 с уникальной атмосферой Майами, 
                      где каждый игрок может воплотить свои мечты.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-miami-orange/30 bg-miami-black/50">
                  <CardHeader>
                    <CardTitle className="text-miami-orange">
                      <Icon name="Award" className="w-6 h-6 mr-3" />
                      НАШИ ДОСТИЖЕНИЯ
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Icon name="Check" className="w-4 h-4 text-miami-cyan mr-2" />
                        Более 10,000 зарегистрированных игроков
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" className="w-4 h-4 text-miami-cyan mr-2" />
                        2 года стабильной работы
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" className="w-4 h-4 text-miami-cyan mr-2" />
                        Лучший RP сервер 2023 года
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-miami-black/80 border-t border-miami-cyan/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Logo size="sm" />
                <span className="text-xl font-bold text-miami-cyan">MIAMI RP</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучший GTA 5 RolePlay сервер с атмосферой Майами
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-miami-orange">ПРАВИЛА</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Dialog>
                    <DialogTrigger className="text-muted-foreground hover:text-miami-cyan transition-colors">
                      Политика конфиденциальности
                    </DialogTrigger>
                    <DialogContent className="bg-miami-black border-miami-cyan/30">
                      <DialogHeader>
                        <DialogTitle className="text-miami-cyan">Политика конфиденциальности</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-sm">
                        <p>Мы защищаем вашу персональную информацию и используем её только для улучшения игрового опыта.</p>
                        <p>Данные не передаются третьим лицам без вашего согласия.</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger className="text-muted-foreground hover:text-miami-cyan transition-colors">
                      Правила сервера
                    </DialogTrigger>
                    <DialogContent className="bg-miami-black border-miami-cyan/30">
                      <DialogHeader>
                        <DialogTitle className="text-miami-cyan">Правила сервера</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-sm max-h-96 overflow-y-auto">
                        <div>
                          <h5 className="font-bold text-miami-orange mb-2">1. Общие правила</h5>
                          <ul className="space-y-1 ml-4">
                            <li>• Уважайте других игроков</li>
                            <li>• Запрещён читерство и багоюз</li>
                            <li>• Соблюдайте RolePlay</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-miami-orange mb-2">2. RolePlay правила</h5>
                          <ul className="space-y-1 ml-4">
                            <li>• Играйте реалистично</li>
                            <li>• Запрещён DeathMatch</li>
                            <li>• Соблюдайте характер персонажа</li>
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger className="text-muted-foreground hover:text-miami-cyan transition-colors">
                      Условия оферты
                    </DialogTrigger>
                    <DialogContent className="bg-miami-black border-miami-cyan/30">
                      <DialogHeader>
                        <DialogTitle className="text-miami-cyan">Условия оферты</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-sm">
                        <p>Играя на нашем сервере, вы соглашаетесь с правилами и условиями использования.</p>
                        <p>Администрация оставляет за собой право изменять правила без предварительного уведомления.</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger className="text-muted-foreground hover:text-miami-cyan transition-colors">
                      Условия возврата и оплаты
                    </DialogTrigger>
                    <DialogContent className="bg-miami-black border-miami-cyan/30">
                      <DialogHeader>
                        <DialogTitle className="text-miami-cyan">Условия возврата и оплаты</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-sm">
                        <div>
                          <h5 className="font-bold text-miami-orange mb-2">Условия оплаты:</h5>
                          <ul className="space-y-1 ml-4">
                            <li>• Оплата через AnyPay</li>
                            <li>• Моментальное зачисление</li>
                            <li>• Безопасные платежи</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-miami-orange mb-2">Условия возврата:</h5>
                          <ul className="space-y-1 ml-4">
                            <li>• Возврат в течение 14 дней</li>
                            <li>• При технических проблемах</li>
                            <li>• Обращение в поддержку</li>
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-miami-gold">СВЯЗЬ</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Icon name="MessageSquare" className="w-4 h-4 mr-2 text-miami-cyan" />
                  <span>Discord сервер</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Globe" className="w-4 h-4 mr-2 text-miami-cyan" />
                  <span>Форум сообщества</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="w-4 h-4 mr-2 text-miami-cyan" />
                  <span>admin@miami-rp.com</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-miami-purple">СТАТИСТИКА</h4>
              <ul className="space-y-2 text-sm">
                <li>Онлайн: <span className="text-miami-cyan font-bold">247/300</span></li>
                <li>Зарегистрировано: <span className="text-miami-gold font-bold">10,247</span></li>
                <li>Дома продано: <span className="text-miami-orange font-bold">1,432</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-miami-cyan/20 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Miami RP. Все права защищены. 
              <span className="text-miami-cyan ml-2">Создано с ❤️ для лучшего RP опыта</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;