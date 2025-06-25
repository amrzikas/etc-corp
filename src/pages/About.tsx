
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Globe, Shield, Clock } from 'lucide-react';
import { useSiteData } from '@/contexts/SiteContext';

const About = () => {
  const { siteData, loading } = useSiteData();

  if (loading) {
    return <Layout><div>جاري التحميل...</div></Layout>;
  }

  const { aboutPageContent } = siteData;

  const iconMap: { [key: string]: any } = {
    Award,
    Users,
    Target,
    Globe,
    Shield,
    Clock
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{aboutPageContent.title}</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              {aboutPageContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      {aboutPageContent.showStorySection && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary-900 mb-8">{aboutPageContent.storyTitle}</h2>
                <div className="space-y-6 text-accent-700 leading-relaxed">
                  <p>{aboutPageContent.storyContent}</p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400&q=80"
                  alt="مبنى الشركة"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">2004</div>
                    <div className="text-accent-600">سنة التأسيس</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Achievements */}
      {aboutPageContent.showAchievementsSection && (
        <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">{aboutPageContent.achievementsTitle}</h2>
              <p className="text-xl text-accent-600">أرقام تتحدث عن نجاحنا</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {aboutPageContent.achievements.map((achievement) => (
                <Card key={achievement.id} className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-secondary mb-2">{achievement.number}</div>
                    <div className="text-accent-600 font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Values */}
      {aboutPageContent.showValuesSection && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">{aboutPageContent.valuesTitle}</h2>
              <p className="text-xl text-accent-600 max-w-2xl mx-auto">
                نلتزم بمجموعة من القيم والمبادئ التي توجه عملنا وتضمن تحقيق أهدافنا
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutPageContent.values.map((value) => {
                const IconComponent = iconMap[value.icon] || Award;
                return (
                  <Card key={value.id} className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-primary-900 mb-4">{value.title}</h3>
                      <p className="text-accent-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {aboutPageContent.showTeamSection && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">{aboutPageContent.teamTitle}</h2>
              <p className="text-xl text-accent-600 max-w-2xl mx-auto">
                نفخر بفريق من أمهر المهندسين والخبراء في مجال الإنشاءات
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutPageContent.teamMembers.map((member) => (
                <Card key={member.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none shadow-lg">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-primary-900 mb-2">{member.name}</h3>
                    <p className="text-secondary font-medium mb-1">{member.position}</p>
                    <p className="text-sm text-accent-600">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default About;
