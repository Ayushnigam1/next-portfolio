'use client';

import { Card, CardContent, Typography, Button, Stack } from '@mui/joy';
import { BadgeCheck } from 'lucide-react';

type CertificateProps = {
  title: string;
  description: string;
  issueDate: string;
  credentialUrl: string;
};

export default function CertificateCard({
  title,
  description,
  issueDate,
  credentialUrl,
}: CertificateProps) {
  return (
    <Card variant="outlined" sx={{ minWidth: 250, maxWidth: 320, mx: 1 }}>
      <CardContent>
        <Stack spacing={1}>
          <Typography level="title-md" startDecorator={<BadgeCheck />}>
            {title}
          </Typography>
          <Typography level="body-sm" color="neutral">{description}</Typography>
          <Typography level="body-xs" color="neutral">{issueDate}</Typography>
          <Button
            size="sm"
            variant="soft"
            color="primary"
            endDecorator={<BadgeCheck size={16} />}
            component="a"
            href={credentialUrl}
            target="_blank"
          >
            View Credential
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
