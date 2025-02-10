import React from 'react';
import { Shield, Zap, Lock, Globe, Star, MessageCircle, Laptop, Smartphone, Server, Check, MapPin, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-950 to-secondary-950 text-white">
      {/* Hero Section */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-primary-400" />
          <span className="text-xl font-display font-bold">Makaka VPN</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-primary-400 transition">Возможности</a>
          <a href="#pricing" className="hover:text-primary-400 transition">Тарифы</a>
          <a href="#reviews" className="hover:text-primary-400 transition">Отзывы</a>
          <a href="#faq" className="hover:text-primary-400 transition">FAQ</a>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-full transition duration-300">
          Войти
        </button>
      </nav>

      <header className="hero-gradient">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Безопасность и свобода в интернете
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Защитите свою конфиденциальность и получите доступ к любому контенту с высокоскоростным VPN сервисом
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-500 hover:bg-primary-600 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">
                Попробовать бесплатно
              </button>
              <button className="bg-transparent border-2 border-primary-400 hover:bg-primary-400/10 px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
                Узнать больше
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=800&q=80"
              alt="Безопасное соединение"
              className="rounded-2xl shadow-2xl animate-float"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-900/80 backdrop-blur-sm p-4 rounded-xl">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary-400" />
                <span className="text-sm font-semibold">256-битное шифрование</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <div className="bg-gradient-to-r from-primary-900/50 via-primary-800/50 to-primary-900/50 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-bold text-primary-400">1M+</h4>
              <p className="text-gray-400">Активных пользователей</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-bold text-primary-400">50+</h4>
              <p className="text-gray-400">Стран присутствия</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-bold text-primary-400">99.9%</h4>
              <p className="text-gray-400">Время работы</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-bold text-primary-400">24/7</h4>
              <p className="text-gray-400">Поддержка</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Makaka VPN предоставляет передовые технологии защиты данных и высокоскоростной доступ к контенту по всему миру
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="feature-card bg-primary-900/20 p-8 rounded-2xl border border-primary-800/50">
              <div className="bg-primary-800/50 p-4 rounded-xl inline-block mb-6">
                <Zap className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Молниеносная скорость</h3>
              <p className="text-gray-400">Сверхбыстрые серверы по всему миру обеспечивают стабильное соединение без задержек</p>
            </div>
            <div className="feature-card bg-primary-900/20 p-8 rounded-2xl border border-primary-800/50">
              <div className="bg-primary-800/50 p-4 rounded-xl inline-block mb-6">
                <Lock className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Максимальная защита</h3>
              <p className="text-gray-400">Военное шифрование и политика полного отсутствия логов гарантируют вашу безопасность</p>
            </div>
            <div className="feature-card bg-primary-900/20 p-8 rounded-2xl border border-primary-800/50">
              <div className="bg-primary-800/50 p-4 rounded-xl inline-block mb-6">
                <Globe className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Доступ везде</h3>
              <p className="text-gray-400">Разблокируйте любой контент из любой точки мира с нашей глобальной сетью серверов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-20 bg-gradient-to-b from-primary-900/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Работает на всех устройствах</h2>
              <p className="text-gray-400 mb-8">
                Защитите все свои устройства с помощью одной подписки. Простая настройка и интуитивно понятный интерфейс.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-800/50 p-2 rounded-lg">
                    <Smartphone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">iOS и Android</h4>
                    <p className="text-sm text-gray-400">Защита на ходу</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-800/50 p-2 rounded-lg">
                    <Laptop className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Windows и macOS</h4>
                    <p className="text-sm text-gray-400">Для работы и развлечений</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-800/50 p-2 rounded-lg">
                    <Server className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Smart TV и роутеры</h4>
                    <p className="text-sm text-gray-400">Защита всей сети</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
                alt="Устройства с VPN"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-900/80 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Check className="w-6 h-6 text-primary-400" />
                  <span className="text-sm font-semibold">До 10 устройств одновременно</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Выберите свой тариф</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Гибкие тарифы для любых потребностей. Отменить подписку можно в любой момент
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-900/20 rounded-2xl p-8 border border-primary-800/50 relative">
              <h3 className="text-2xl font-display font-bold mb-4">Базовый</h3>
              <p className="text-3xl font-bold mb-6">299₽<span className="text-lg font-normal text-gray-400">/мес</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary-400 mr-2" /> 1 устройство
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary-400 mr-2" /> Базовая скорость
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary-400 mr-2" /> 5 локаций
                </li>
              </ul>
              <button className="w-full bg-primary-600 hover:bg-primary-700 py-3 rounded-full transition duration-300">
                Выбрать
              </button>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 transform scale-105 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                Популярный
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Премиум</h3>
              <p className="text-3xl font-bold mb-6">499₽<span className="text-lg font-normal text-gray-200">/мес</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-2" /> 5 устройств
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-2" /> Максимальная скорость
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-2" /> Все локации
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-2" /> Приоритетная поддержка
                </li>
              </ul>
              <button className="w-full bg-white text-primary-600 hover:bg-gray-100 py-3 rounded-full transition duration-300">
                Выбрать
              </button>
            </div>
            <div className="bg-primary-900/20 rounded-2xl p-8 border border-primary-800/50 relative">
              <h3 className="text-2xl font-display font-bold mb-4">Бизнес</h3>
              <p className="text-3xl font-bold mb-6">999₽<span className="text-lg font-normal text-gray-400">/мес</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary-400 mr-2" /> Безлимит устройств
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary-400 mr-2" /> Выделенные IP
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary-400 mr-2" /> Все локации
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary-400 mr-2" /> 24/7 поддержка
                </li>
              </ul>
              <button className="w-full bg-primary-600 hover:bg-primary-700 py-3 rounded-full transition duration-300">
                Выбрать
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Глобальная сеть серверов"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-900/80 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-primary-400" />
                  <span className="text-sm font-semibold">50+ стран, 100+ локаций</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-display font-bold mb-6">Глобальная сеть серверов</h2>
              <p className="text-gray-400 mb-8">
                Наша обширная сеть серверов обеспечивает стабильное соединение и высокую скорость по всему миру.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Award className="w-6 h-6 text-primary-400" />
                  <div>
                    <h4 className="font-semibold">Оптимизированные серверы</h4>
                    <p className="text-sm text-gray-400">Для стриминга и игр</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Server className="w-6 h-6 text-primary-400" />
                  <div>
                    <h4 className="font-semibold">Автоматический выбор</h4>
                    <p className="text-sm text-gray-400">Лучший сервер для вас</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Что говорят пользователи</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам довольных пользователей, которые уже оценили преимущества Makaka VPN
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card bg-primary-900/20 p-6 rounded-2xl border border-primary-800/50">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" 
                  alt="Александр П." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Александр П.</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-300">Отличный сервис! Использую уже год, скорость на высоте, никаких проблем с подключением.</p>
            </div>
            <div className="testimonial-card bg-primary-900/20 p-6 rounded-2xl border border-primary-800/50">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" 
                  alt="Мария С." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Мария С.</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-300">Простой интерфейс и отличная поддержка. Помогли настроить все за пару минут.</p>
            </div>
            <div className="testimonial-card bg-primary-900/20 p-6 rounded-2xl border border-primary-800/50">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" 
                  alt="Дмитрий К." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Дмитрий К.</h4>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-300">Использую для работы, стабильное соединение и отличная скорость. Рекомендую!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-b from-primary-900/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Частые вопросы</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о нашем сервисе
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-primary-900/20 rounded-lg p-6 group">
              <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                Как начать использовать Makaka VPN?
                <span className="text-primary-400 group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-300">
                Просто зарегистрируйтесь, выберите подходящий тариф и скачайте приложение для вашего устройства. 
                Установка занимает меньше минуты!
              </p>
            </details>
            <details className="bg-primary-900/20 rounded-lg p-6 group">
              <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                Какие устройства поддерживаются?
                <span className="text-primary-400 group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-300">
                Мы поддерживаем все популярные платформы: Windows, macOS, iOS, Android, а также роутеры и Smart TV.
              </p>
            </details>
            <details className="bg-primary-900/20 rounded-lg p-6 group">
              <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                Как работает политика возврата?
                <span className="text-primary-400 group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-300">
                Мы предоставляем 30-дневную гарантию возврата денег. Если вас что-то не устроит, мы вернем полную стоимость подписки.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-4">Остались вопросы?</h2>
            <p className="text-gray-400 mb-8">
              Наша команда поддержки всегда готова помочь вам
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="w-full px-4 py-3 rounded-lg bg-primary-900/20 border border-primary-800/50 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <textarea 
                placeholder="Ваше сообщение" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-primary-900/20 border border-primary-800/50 focus:outline-none focus:border-primary-500 transition-colors"
              ></textarea>
               <button className="w-full bg-primary-600 hover:bg-primary-700 py-3 rounded-lg transition duration-300">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-primary-400" />
                <span className="font-display font-bold">Makaka VPN</span>
              </div>
              <p className="text-gray-400">Ваша безопасность - наш приоритет</p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-primary-400 transition">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-primary-400 transition">Тарифы</a></li>
                <li><a href="#reviews" className="hover:text-primary-400 transition">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Скачать</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#faq" className="hover:text-primary-400 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Контакты</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">База знаний</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Статус серверов</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary-400 transition">Условия использования</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">GDPR</a></li>
                <li><a href="#" className="hover:text-primary-400 transition">Правовые уведомления</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-800/50 text-center text-gray-400">
            <p>&copy; 2024 Makaka VPN. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;