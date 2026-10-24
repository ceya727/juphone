import { FaComment, FaImages, FaNoteSticky, FaPhone, FaMessage, FaCamera, FaCompass, FaGear } from 'react-icons/fa6'

export const homeApps = [
  { id: 'kakaotalk', label: 'KakaoTalk', path: '/kakaotalk', color: '#FEE500', icon: FaComment, iconColor: '#3A1D1D' },
  { id: 'photos', label: 'Photos', path: '/photos', color: '#ffffff', icon: FaImages, iconColor: '#ff3b30' },
  { id: 'memo', label: 'Notes', path: '/memo', color: '#ffd60a', icon: FaNoteSticky, iconColor: '#fff' },
  { id: 'sms', label: 'Messages', path: '/sms', color: '#34c759', icon: FaMessage, iconColor: '#fff' },
  { id: 'camera', label: 'Camera', path: null, color: '#e5e7eb', icon: FaCamera, iconColor: '#222' },
  { id: 'settings', label: 'Settings', path: null, color: '#8e8e93', icon: FaGear, iconColor: '#fff' },
]

export const dockApps = [
  { id: 'phone', label: 'Phone', path: '/phone', color: '#34c759', icon: FaPhone, iconColor: '#fff' },
  { id: 'safari', label: 'Safari', path: null, color: '#fff', icon: FaCompass, iconColor: '#087cff' },
  { id: 'messages', label: 'Messages', path: '/sms', color: '#34c759', icon: FaMessage, iconColor: '#fff' },
  { id: 'photos-dock', label: 'Photos', path: '/photos', color: '#fff', icon: FaImages, iconColor: '#ff3b30' },
]
