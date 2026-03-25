import type { CSSProperties } from 'react'
import { SGLTypography } from '../Typography/SGLTypography'
import { SGLArrowDownwardIcon } from '../Icons/DownArrowIcon/SGLArrowDownIcon'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  type AccordionProps as MuiAccordionProps,
} from '@mui/material'
import type { SGLTypographyVariantOptions } from '@/interfaces/SGLTypographyVariantOptions'
import { accordionStyles } from './styles'

interface SGLAccordionProps extends Omit<MuiAccordionProps, 'disabled'> {
  title?: string
  description?: string
  isDisabled?: boolean
  variantTitle?: SGLTypographyVariantOptions['variant']
  variantDescription?: SGLTypographyVariantOptions['variant']
  styles?: CSSProperties
  stylesTitle?: CSSProperties
  stylesDescription?: CSSProperties
}

export const SGLAccordion = ({
  title,
  description,
  isDisabled = false,
  variantTitle = 'mediumTitle',
  variantDescription = 'smallTitle',
  styles,
  stylesTitle,
  stylesDescription,
  ...props
}: SGLAccordionProps) => {
  return (
    <Accordion disabled={isDisabled} sx={{ ...accordionStyles, ...styles }} {...props}>
      <AccordionSummary expandIcon={<SGLArrowDownwardIcon />}>
        <SGLTypography variant={variantTitle} styles={stylesTitle}>
          {title}
        </SGLTypography>
      </AccordionSummary>
      <AccordionDetails>
        <SGLTypography variant={variantDescription} styles={stylesDescription}>
          {description}
        </SGLTypography>
      </AccordionDetails>
    </Accordion>
  )
}
