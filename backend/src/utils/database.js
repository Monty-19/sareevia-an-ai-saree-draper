// Mock database for sarees
export const sareeDatabase = {
  varieties: [
    {
      id: '1',
      name: 'Banarasi Silk',
      fabric: 'Pure Silk with Zari Weaving',
      origin: 'Varanasi, Uttar Pradesh',
      color: ['Gold', 'Purple', 'Deep Red', 'Maroon'],
      pattern: 'Jangla (floral vine scrolls), Kalga (corner motifs)',
      occasion: ['Wedding', 'Festival', 'Formal Events'],
      bestBodyTypes: ['Pear', 'Apple', 'Rectangle'],
      drapingStyle: 'Nivi Style',
      price: 'Premium',
      description: 'Traditional silk saree with heavy zari embroidery'
    },
    {
      id: '2',
      name: 'Kanjeevaram',
      fabric: 'Pure Mulberry Silk',
      origin: 'Kanchipuram, Tamil Nadu',
      color: ['Maroon', 'Emerald', 'Gold', 'Royal Blue'],
      pattern: 'Geometric borders, Traditional temple motifs',
      occasion: ['Wedding', 'Religious Events', 'Festivals'],
      bestBodyTypes: ['Hourglass', 'Pear', 'Rectangle'],
      drapingStyle: 'Tamil Style',
      price: 'Premium',
      description: 'South Indian silk saree known for durability and vibrant colors'
    },
    {
      id: '3',
      name: 'Chiffon',
      fabric: 'Lightweight Chiffon',
      origin: 'Pan India',
      color: ['Rose Gold', 'Pastel', 'Jewel Tones'],
      pattern: 'Embroidered, Digital Print',
      occasion: ['Daily Wear', 'Casual Events', 'Parties'],
      bestBodyTypes: ['Apple', 'Hourglass', 'Pear'],
      drapingStyle: 'Floating Pallu',
      price: 'Affordable',
      description: 'Light and elegant chiffon perfect for casual to semi-formal occasions'
    },
    {
      id: '4',
      name: 'Patola',
      fabric: 'Double Ikat Silk',
      origin: 'Gujarat',
      color: ['Multicolor', 'Vibrant'],
      pattern: 'Double ikat geometric patterns',
      occasion: ['Wedding', 'Festival', 'Formal Events'],
      bestBodyTypes: ['All types'],
      drapingStyle: 'Gujarati Style',
      price: 'Premium',
      description: 'Ancient ikat technique creating geometric patterns on silk'
    },
    {
      id: '5',
      name: 'Tussar',
      fabric: 'Tussar Silk',
      origin: 'Jharkhand, Bihar',
      color: ['Golden', 'Brown', 'Natural'],
      pattern: 'Tribal motifs, Hand-painted designs',
      occasion: ['Casual Wear', 'Festivals', 'Events'],
      bestBodyTypes: ['Rectangle', 'Pear', 'Apple'],
      drapingStyle: 'Odisha/Jharkhand Style',
      price: 'Mid-range',
      description: 'Handloom silk with natural texture and tribal designs'
    }
  ],

  recommendations: {
    'pear-shape': {
      bodyType: 'Pear Shape',
      description: 'Wider hips compared to shoulders',
      recommendations: [
        {
          sareeId: '1',
          sarreeName: 'Banarasi Silk',
          compatibility: 96,
          reason: 'The heavy silk and structured weave adds volume at the bust, balancing pear-shape figures.',
          tips: [
            'Secure pleats with extra pins for definition',
            'Keep pallu draped high on shoulder',
            'Choose darker borders to ground the look',
            'Use an embellished blouse to draw attention upward'
          ]
        },
        {
          sareeId: '2',
          sarreeName: 'Kanjeevaram',
          compatibility: 92,
          reason: 'Rich colors and structured weave enhance your features while the pallu flatters your frame.',
          tips: [
            'Tuck pallu high at shoulder joint',
            'Create defined, tight pleats',
            'Wear shoulder jewelry to balance proportions',
            'Choose contrasting blouse color'
          ]
        }
      ]
    },
    'apple-shape': {
      bodyType: 'Apple Shape',
      description: 'Wider midsection with slimmer legs',
      recommendations: [
        {
          sareeId: '3',
          sarreeName: 'Chiffon',
          compatibility: 94,
          reason: 'Light fabric flows elegantly, creating a balanced silhouette without adding bulk to the midsection.',
          tips: [
            'Let the pallu flow freely for a draped effect',
            'Minimal pinning to avoid excess fabric at waist',
            'Layer with light jewelry for elegance',
            'Choose vertical patterns to elongate'
          ]
        },
        {
          sareeId: '5',
          sarreeName: 'Tussar',
          compatibility: 88,
          reason: 'Natural drape and texture provides subtle flattery without clinging to the midsection.',
          tips: [
            'Wear with a fitted blouse to define waist',
            'Create soft, loose pleats',
            'Use a lightweight petticoat',
            'Accessorize at the neckline to draw attention upward'
          ]
        }
      ]
    },
    'hourglass': {
      bodyType: 'Hourglass',
      description: 'Well-balanced proportions with defined waist',
      recommendations: [
        {
          sareeId: '4',
          sarreeName: 'Patola',
          compatibility: 95,
          reason: 'Rich patterns and vibrant colors showcase balanced proportions beautifully.',
          tips: [
            'Wear a fitted blouse to emphasize waist',
            'Create well-defined pleats',
            'Choose geometric patterns that complement your shape',
            'Accessorize generously - you can carry bold jewelry'
          ]
        },
        {
          sareeId: '2',
          sarreeName: 'Kanjeevaram',
          compatibility: 93,
          reason: 'Structured silk enhances your natural curves while the traditional design adds formality.',
          tips: [
            'Opt for form-fitting blouses',
            'Create precise, tight pleats at the waist',
            'Use ornate jewelry to enhance elegance',
            'Choose jewel tones that complement skin tone'
          ]
        }
      ]
    },
    'rectangle': {
      bodyType: 'Rectangle',
      description: 'Balanced shoulders and hips with minimal waist definition',
      recommendations: [
        {
          sareeId: '1',
          sarreeName: 'Banarasi Silk',
          compatibility: 90,
          reason: 'Textured fabric and embroidery create visual definition and add curves to straight silhouettes.',
          tips: [
            'Choose sarees with waist-level embroidery',
            'Wear a fitted, embellished blouse to define waist',
            'Create voluminous pleats to add shape',
            'Use a statement pallu to create dimension'
          ]
        },
        {
          sareeId: '5',
          sarreeName: 'Tussar',
          compatibility: 87,
          reason: 'Textured weave and hand-painted details add visual interest and shape to the silhouette.',
          tips: [
            'Opt for embroidered or patterned sarees',
            'Wear a fitted, contrast-colored blouse',
            'Create structured pleats with good support',
            'Add layered jewelry for dimension'
          ]
        }
      ]
    }
  }
};

export const mockUserDatabase = new Map();

export const generateUserId = () => {
  return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

export const generateAnalysisId = () => {
  return 'analysis_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};
