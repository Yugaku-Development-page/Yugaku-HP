export const sendContactForm = async (formData: {
  type: string;
  name?: string;
  company?: string;
  email: string;
  phone?: string;
  content: string;
  artworkTitle?: string;
  artworkId?: string;
}) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('フォームの送信に失敗しました');
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending contact form:', error);
    return { success: false, error: 'フォームの送信に失敗しました' };
  }
};