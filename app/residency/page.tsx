import HeroSection from '@/components/sections/HeroSection';
import ProgramOverview from '@/components/sections/ProgramOverview';
import MentorsSection from '@/components/sections/MentorsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import ScheduleSection from '@/components/sections/ScheduleSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div id="program">
        <ProgramOverview />
      </div>
      <div id="roles">
        <ScheduleSection />
      </div>
      <div id="mentors">
        <MentorsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <CTASection />
    </main>
  );
}