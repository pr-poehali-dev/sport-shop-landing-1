import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeDay, setActiveDay] = useState('monday');

  const days = [
    { id: 'monday', name: 'ПН', fullName: 'Понедельник' },
    { id: 'tuesday', name: 'ВТ', fullName: 'Вторник' },
    { id: 'wednesday', name: 'СР', fullName: 'Среда' },
    { id: 'thursday', name: 'ЧТ', fullName: 'Четверг' },
    { id: 'friday', name: 'ПТ', fullName: 'Пятница' },
  ];

  const schedule = {
    monday: [
      { time: '8.00-8.45', subject: 'Разговоры о важном', room: '', icon: 'MessageCircle' },
      { time: '8.55-9.40', subject: 'Математика', room: '', icon: 'Calculator' },
      { time: '9.55-10.40', subject: 'Литература', room: '', icon: 'BookOpen' },
      { time: '10.55-11.40', subject: 'Бассейн/ ритмика', room: '', icon: 'Waves' },
      { time: '11.55-12.40', subject: 'Отдых', room: '', icon: 'Coffee', type: 'break' },
      { time: '12.50-13.35', subject: 'Русский язык', room: '', icon: 'BookText' },
      { time: '13.45-14.25', subject: 'Арт-студия', room: '', icon: 'Palette' },
      { time: '14.30-15.10', subject: 'Функциональная грамотность', room: '', icon: 'Brain' },
      { time: '15.15-16.00', subject: 'Ужин, прогулка', room: '', icon: 'Utensils', type: 'break' },
      { time: '16.00-17.00', subject: 'Самоподготовка', room: '', icon: 'PenTool' },
      { time: '17.00-17.30', subject: 'Занятия по интересам, уход домой', room: '', icon: 'Home', type: 'break' },
    ],
    tuesday: [
      { time: '8.00-8.45', subject: 'Разговоры о важном', room: '', icon: 'MessageCircle' },
      { time: '8.55-9.40', subject: 'Математика', room: '', icon: 'Calculator' },
      { time: '9.55-10.40', subject: 'Динамическая пауза', room: '', icon: 'Activity', type: 'break' },
      { time: '10.55-11.40', subject: 'Русский язык', room: '', icon: 'BookText' },
      { time: '11.55-12.40', subject: 'Окружающий мир', room: '', icon: 'Globe' },
      { time: '12.50-13.35', subject: 'Петерсон', room: '', icon: 'Calculator' },
      { time: '13.45-14.25', subject: 'Английский язык', room: '', icon: 'Languages' },
      { time: '14.30-15.10', subject: 'Библиотечный час', room: '', icon: 'Library' },
      { time: '15.15-16.00', subject: 'Ужин, прогулка', room: '', icon: 'Utensils', type: 'break' },
      { time: '16.00-17.00', subject: 'Самоподготовка', room: '', icon: 'PenTool' },
      { time: '17.00-17.30', subject: 'Занятия по интересам, уход домой', room: '', icon: 'Home', type: 'break' },
    ],
    wednesday: [
      { time: '8.00-8.45', subject: 'Музыка', room: '', icon: 'Music' },
      { time: '8.55-9.40', subject: 'Математика', room: '', icon: 'Calculator' },
      { time: '9.55-10.40', subject: 'Литература', room: '', icon: 'BookOpen' },
      { time: '10.55-11.40', subject: 'Русский язык', room: '', icon: 'BookText' },
      { time: '11.55-12.40', subject: 'Физическая культура', room: '', icon: 'Dumbbell' },
      { time: '12.50-13.35', subject: 'Труд', room: '', icon: 'Hammer' },
      { time: '13.45-14.25', subject: 'Олимп', room: '', icon: 'Trophy' },
      { time: '14.30-15.10', subject: 'Творческая лаборатория', room: '', icon: 'FlaskConical' },
      { time: '15.15-16.00', subject: 'Ужин, прогулка', room: '', icon: 'Utensils', type: 'break' },
      { time: '16.00-17.00', subject: 'Самоподготовка', room: '', icon: 'PenTool' },
      { time: '17.00-17.30', subject: 'Занятия по интересам, уход домой', room: '', icon: 'Home', type: 'break' },
    ],
    thursday: [
      { time: '8.00-8.45', subject: 'Государственный язык', room: '', icon: 'Flag' },
      { time: '8.55-9.40', subject: 'Литература', room: '', icon: 'BookOpen' },
      { time: '9.55-10.40', subject: 'Русский язык', room: '', icon: 'BookText' },
      { time: '10.55-11.40', subject: 'Бассейн/ ритмика', room: '', icon: 'Waves' },
      { time: '11.55-12.40', subject: 'Отдых', room: '', icon: 'Coffee', type: 'break' },
      { time: '12.50-13.35', subject: 'Петерсон', room: '', icon: 'Calculator' },
      { time: '13.45-14.25', subject: 'ИЗО', room: '', icon: 'Paintbrush' },
      { time: '14.30-15.10', subject: 'Ключ к успеху', room: '', icon: 'Key' },
      { time: '15.15-16.00', subject: 'Ужин, прогулка', room: '', icon: 'Utensils', type: 'break' },
      { time: '16.00-17.00', subject: 'Самоподготовка', room: '', icon: 'PenTool' },
      { time: '17.00-17.30', subject: 'Занятия по интересам, уход домой', room: '', icon: 'Home', type: 'break' },
    ],
    friday: [
      { time: '8.00-8.45', subject: 'Математика', room: '', icon: 'Calculator' },
      { time: '8.55-9.40', subject: 'Русский язык', room: '', icon: 'BookText' },
      { time: '9.55-10.40', subject: 'Робот./Констр.', room: '', icon: 'Bot' },
      { time: '10.55-11.40', subject: 'Робот./англ. кр.', room: '', icon: 'Languages' },
      { time: '11.55-12.40', subject: 'Окружающий мир', room: '', icon: 'Globe' },
      { time: '12.50-13.35', subject: 'Физическая культура', room: '', icon: 'Dumbbell' },
      { time: '13.45-14.25', subject: 'Англ. кр./робот.', room: '', icon: 'Languages' },
      { time: '14.30-15.10', subject: 'Констр./робот.', room: '', icon: 'Blocks' },
      { time: '15.15-16.00', subject: 'Ужин, прогулка', room: '', icon: 'Utensils', type: 'break' },
      { time: '16.00-17.00', subject: 'Самоподготовка', room: '', icon: 'PenTool' },
      { time: '17.00-17.30', subject: 'Занятия по интересам, уход домой', room: '', icon: 'Home', type: 'break' },
    ],
  };

  const currentSchedule = schedule[activeDay as keyof typeof schedule];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Icon name="GraduationCap" size={32} className="text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Расписание 1Б класса</h1>
                <p className="text-sm text-muted-foreground">Учебный год 2024-2025</p>
              </div>
            </div>
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-base">
              <Icon name="Calendar" size={16} className="mr-2" />
              Сегодня
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <img 
            src="https://cdn.poehali.dev/files/1e640435-cb3a-462e-b376-7bc7b07d2323.jpg"
            alt="Оригинальное расписание"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg border"
          />
        </div>

        <Card className="max-w-5xl mx-auto shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="CalendarDays" size={28} />
              Расписание на неделю
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                {days.map((day) => (
                  <TabsTrigger
                    key={day.id}
                    value={day.id}
                    className="text-base font-semibold"
                  >
                    <Icon name="CalendarDays" size={16} className="mr-2" />
                    {day.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {days.map((day) => (
                <TabsContent key={day.id} value={day.id}>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      {day.fullName}
                    </h3>
                    {currentSchedule.map((lesson, index) => (
                      <Card
                        key={index}
                        className={`hover:shadow-md transition-all ${
                          lesson.type === 'break'
                            ? 'bg-muted/50 border-dashed'
                            : 'bg-white hover:-translate-y-1'
                        }`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                              <Badge
                                variant="outline"
                                className="text-sm font-mono px-3 py-1"
                              >
                                <Icon name="Clock" size={14} className="mr-2" />
                                {lesson.time}
                              </Badge>
                            </div>
                            <div
                              className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                                lesson.type === 'break'
                                  ? 'bg-muted'
                                  : 'bg-primary/10'
                              }`}
                            >
                              <Icon
                                name={lesson.icon}
                                size={24}
                                className={
                                  lesson.type === 'break'
                                    ? 'text-muted-foreground'
                                    : 'text-primary'
                                }
                              />
                            </div>
                            <div className="flex-grow">
                              <h4
                                className={`font-semibold text-lg ${
                                  lesson.type === 'break'
                                    ? 'text-muted-foreground'
                                    : ''
                                }`}
                              >
                                {lesson.subject}
                              </h4>
                              {lesson.room && (
                                <p className="text-sm text-muted-foreground">
                                  Кабинет: {lesson.room}
                                </p>
                              )}
                            </div>
                            <div className="flex-shrink-0">
                              <Badge
                                variant={
                                  lesson.type === 'break' ? 'outline' : 'secondary'
                                }
                              >
                                {lesson.type === 'break' ? 'Перерыв' : `Урок ${index + 1}`}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-8 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-3">
              <Icon name="Book" size={28} className="text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">11 уроков</h3>
            <p className="text-sm text-muted-foreground">В день</p>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-3">
              <Icon name="Clock" size={28} className="text-secondary" />
            </div>
            <h3 className="font-bold text-lg mb-2">8:00 - 17:30</h3>
            <p className="text-sm text-muted-foreground">Время занятий</p>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-3">
              <Icon name="Users" size={28} className="text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">1Б класс</h3>
            <p className="text-sm text-muted-foreground">Начальная школа</p>
          </Card>
        </div>
      </main>

      <footer className="mt-16 py-8 bg-white border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Расписание 1Б класса</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
