'use client';

import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  trackDownloadClick,
  type DownloadPlatform,
} from '@/lib/download-analytics';

type AppDownloadLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  platform: DownloadPlatform;
};

const storeUrl: Record<DownloadPlatform, string> = {
  ios: APP_STORE_URL,
  android: PLAY_STORE_URL,
};

export default function AppDownloadLink({
  platform,
  href,
  onClick,
  ...props
}: AppDownloadLinkProps) {
  return (
    <a
      href={href ?? storeUrl[platform]}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        trackDownloadClick(platform);
        onClick?.(event);
      }}
      {...props}
    />
  );
}
