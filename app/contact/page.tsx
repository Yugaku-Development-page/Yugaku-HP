'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { sendContactForm } from '@/lib/contact';
import type { ContactForm } from '@/types/microcms';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message?: string } | null>(null);
  
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ContactForm>();

  useEffect(() => {
    const type = searchParams.get('type');
    const artworkTitle = searchParams.get('artworkTitle');
    const artworkId = searchParams.get('artworkId');

    if (type) {
      const contactTypes = ['app', 'artwork', 'other', 'sns'] as const;
      const isContactType = (value: string): value is ContactForm['type'] =>
        contactTypes.includes(value as ContactForm['type']);
      setValue('type', isContactType(type) ? type : 'other');
    }

    if (artworkTitle) {
      setValue('artworkTitle', decodeURIComponent(artworkTitle));
    }
    if (artworkId) {
      setValue('artworkId', artworkId);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    const result = await sendContactForm(data);
    setSubmitResult(result);
    setIsSubmitting(false);

    if (result.success) {
      reset();
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'app':
        return 'アプリ制作の相談';
      case 'artwork':
        return '美術品（購入・委託・紹介）の相談';
      case 'sns':
        return 'SNS運用支援（紹介制）';
      default:
        return 'その他';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              お問い合わせ
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ご相談・お問い合わせはお気軽に
            </p>
          </div>
        </div>
      </section>

      {/* フォームセクション */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="card">
            {submitResult && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitResult.success
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <p className="font-medium">
                  {submitResult.success
                    ? 'お問い合わせを受け付けました'
                    : 'エラーが発生しました'}
                </p>
                <p className="text-sm mt-1">
                  {submitResult.success
                    ? '内容確認のうえ、通常2営業日以内にご連絡します。'
                    : submitResult.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* 問い合わせ種別 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'app', label: 'アプリ制作の相談' },
                    { value: 'artwork', label: '美術品（購入・委託・紹介）の相談' },
                    { value: 'other', label: 'その他' },
                    { value: 'sns', label: 'SNS運用支援（紹介制）' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        value={option.value}
                        {...register('type', { required: 'お問い合わせ種別を選択してください' })}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {option.label}
                        {option.value === 'sns' && (
                          <span className="ml-1 text-xs text-gray-500">
                            （紹介のある場合のみ対応）
                          </span>
                        )}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.type && (
                  <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
                )}
              </div>

              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              {/* 会社名 */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  {...register('company')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="株式会社○○"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'メールアドレスを入力してください',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: '有効なメールアドレスを入力してください',
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* 電話番号 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="03-1234-5678"
                />
              </div>

              {/* 内容 */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="content"
                  rows={6}
                  {...register('content', {
                    required: 'お問い合わせ内容を入力してください',
                    minLength: {
                      value: 10,
                      message: '10文字以上で入力してください',
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="お問い合わせ内容をご記入ください"
                />
                {errors.content && (
                  <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
                )}
              </div>

              {/* 隠しフィールド */}
              <input type="hidden" {...register('artworkTitle')} />
              <input type="hidden" {...register('artworkId')} />

              {/* 注意事項 */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <i className="fas fa-info-circle mr-2"></i>
                  内容確認のうえ、通常2営業日以内にご連絡します。
                </p>
              </div>

              {/* 送信ボタン */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      送信中...
                    </>
                  ) : (
                    '送信する'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* お問い合わせ先 */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">お急ぎの場合</h3>
            <p className="text-gray-600 mb-4">
              お電話でのお問い合わせも受け付けております。
            </p>
            <p className="text-sm text-gray-500">
              ※営業時間：平日 9:00-18:00
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
