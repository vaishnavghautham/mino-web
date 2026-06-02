import { track } from '@vercel/analytics';

export const APP_STORE_URL =
  'https://apps.apple.com/in/app/zypay/id6452753963';
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.neosurge.neosurge';

export type DownloadPlatform = 'ios' | 'android';

const DOWNLOAD_EVENT: Record<DownloadPlatform, string> = {
  ios: 'download_ios',
  android: 'download_android',
};

export function trackDownloadClick(platform: DownloadPlatform) {
  track(DOWNLOAD_EVENT[platform]);
}
