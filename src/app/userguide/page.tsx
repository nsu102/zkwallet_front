'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  REGISTRATION_STEPS, 
  ADMIN_VOTING_STEPS, 
  USER_VOTING_STEPS 
} from '@/constants/userguide.constants';
import { StepCard } from '@/components/userguide/StepCard';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react'; // 아이콘 추가

export default function UserGuidePage() {
  const [activeTab, setActiveTab] = useState<'online' | 'onsite'>('online');

  return (
    <main className="min-h-screen pt-52 pb-40 bg-[#FAFAFB]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
          >
            이용 안내
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* 1. 회원가입 섹션 */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-white rounded-[40px] p-12 md:p-20 shadow-[0_10px_50px_rgba(0,0,0,0.02)] border border-gray-50">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">기업/단체 회원가입</h2>
            <p className="text-gray-400">간편한 절차로 zkVoting의 파트너가 되어보세요.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REGISTRATION_STEPS.map((step, idx) => (
              <StepCard key={idx} {...step} index={idx} variant="gray" />
            ))}
          </div>
        </div>
      </section>

      {/* 2. 서비스 이용 프로세스 섹션 */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            모두가 편리한 <span className="text-blue-600">zkVoting</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            온라인 투표는 별도의 승인 대기 없이 즉시 개설하고 참여할 수 있습니다.
          </p>
        </div>

        {/* 탭 스위처 - mhtml의 깔끔한 스타일 재현 */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1.5 rounded-2xl flex">
            {(['online', 'onsite'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-10 py-3.5 rounded-xl text-lg font-bold transition-all duration-300 ${
                  activeTab === tab ? 'text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-white rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab === 'online' ? '온라인 투표' : '현장 투표'}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'online' ? (
            <motion.div
              key="online-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-24"
            >
              {/* 관리자 플로우 */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-8 w-2 bg-blue-600 rounded-full" />
                  <h3 className="text-2xl font-black text-gray-900">관리자 프로세스</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ADMIN_VOTING_STEPS.map((step, idx) => (
                    <StepCard key={idx} {...step} index={idx} variant="blue" />
                  ))}
                </div>
              </div>

              {/* 이용자 플로우 */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-8 w-2 bg-purple-600 rounded-full" />
                  <h3 className="text-2xl font-black text-gray-900">이용자 프로세스</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {USER_VOTING_STEPS.map((step, idx) => (
                    <StepCard key={idx} {...step} index={idx} variant="purple" />
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="onsite-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-32 bg-white rounded-[40px] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-4xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">현장 투표 서비스 준비 중</h3>
              <p className="text-gray-400">더 나은 서비스를 위해 준비하고 있습니다. 잠시만 기다려 주세요.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 하단 다운로드 바 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-8 md:p-12 bg-gray-900 rounded-[32px] overflow-hidden relative"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">상세 매뉴얼이 필요하신가요?</h3>
              <p className="text-gray-400">PDF 파일을 통해 더 자세한 이용 방법을 확인하실 수 있습니다.</p>
            </div>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-2xl text-lg font-bold gap-3 shadow-xl shadow-blue-900/20"
              onClick={() => window.open('https://www.zkvoting.com/_files/ugd/9484df_660f3c6a2e914dd0ba07af0eb308a246.pdf')}
            >
              <FileText className="w-6 h-6" />
              매뉴얼 다운로드 (KO)
            </Button>
          </div>
          {/* 장식용 배경 요소 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
        </motion.div>
      </section>
    </main>
  );
}