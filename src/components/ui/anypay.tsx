import React, { useState } from 'react';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import Icon from './icon';

interface DonatePackage {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const donatePackages: DonatePackage[] = [
  {
    id: 'vip',
    name: 'VIP статус',
    price: 500,
    currency: 'RUB',
    description: 'Базовые привилегии на сервере',
    features: ['Приоритет в очереди', 'Уникальный ник-тег', '10% бонус к зарплате', 'Доступ к VIP машинам']
  },
  {
    id: 'premium',
    name: 'Premium статус', 
    price: 1500,
    currency: 'RUB',
    description: 'Расширенные возможности',
    features: ['Все VIP привилегии', 'Приватные дома', '25% бонус к зарплате', 'Эксклюзивная одежда', 'Доступ к премиум зонам'],
    popular: true
  },
  {
    id: 'ultimate',
    name: 'Ultimate пакет',
    price: 3000,
    currency: 'RUB', 
    description: 'Максимальный набор привилегий',
    features: ['Все Premium привилегии', '50% бонус к зарплате', 'Личный гараж', 'Кастомные машины', 'Админские команды']
  }
];

interface AnyPayProps {
  className?: string;
}

const AnyPay: React.FC<AnyPayProps> = ({ className = '' }) => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePayment = async (pkg: DonatePackage) => {
    setSelectedPackage(pkg.id);
    setLoading(true);

    // Имитация интеграции с AnyPay API
    try {
      // В реальном проекте здесь будет вызов к AnyPay API
      const paymentData = {
        merchant_id: 'YOUR_MERCHANT_ID',
        amount: pkg.price,
        currency: pkg.currency,
        desc: pkg.name,
        sign: 'generated_signature'
      };

      // Открыть форму оплаты AnyPay
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://anypay.io/merchant';
      form.target = '_blank';

      Object.entries(paymentData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
      setSelectedPackage(null);
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-miami-cyan neon-text">
          ДОНАТ ПАКЕТЫ
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Поддержи сервер и получи уникальные привилегии в мире Miami RP!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {donatePackages.map((pkg) => (
          <Card 
            key={pkg.id}
            className={`relative transition-all duration-300 hover:scale-105 ${
              pkg.popular 
                ? 'border-miami-gold shadow-2xl shadow-miami-gold/20' 
                : 'border-miami-cyan/30 hover:border-miami-cyan'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-miami-gold text-black px-4 py-1 rounded-full text-sm font-bold">
                ПОПУЛЯРНЫЙ
              </div>
            )}
            
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-miami-cyan">
                {pkg.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {pkg.description}
              </CardDescription>
              <div className="text-4xl font-black text-miami-gold">
                {pkg.price} ₽
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-miami-cyan" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full font-bold ${
                  pkg.popular 
                    ? 'bg-miami-gold text-black hover:bg-miami-gold/80' 
                    : 'gta-button text-black'
                }`}
                onClick={() => handlePayment(pkg)}
                disabled={loading && selectedPackage === pkg.id}
              >
                {loading && selectedPackage === pkg.id ? (
                  <Icon name="Loader" className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Icon name="CreditCard" className="w-4 h-4 mr-2" />
                )}
                КУПИТЬ СЕЙЧАС
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center space-x-2">
          <Icon name="Shield" className="w-4 h-4" />
          <span>Безопасная оплата через AnyPay</span>
        </p>
      </div>
    </div>
  );
};

export default AnyPay;