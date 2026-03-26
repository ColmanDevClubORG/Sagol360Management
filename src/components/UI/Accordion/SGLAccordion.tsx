import { type CSSProperties, type ReactNode } from 'react'
import { SGLArrowDownwardIcon } from '../Icons/DownArrowIcon/SGLArrowDownIcon'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  type AccordionProps as MuiAccordionProps,
} from '@mui/material'
import { accordionStyles } from './styles'

interface SGLAccordionProps extends Omit<
  MuiAccordionProps,
  'disabled' | 'expended' | 'children' | 'title'
> {
  title?: ReactNode
  description?: ReactNode
  isDisabled?: boolean
  styles?: CSSProperties
}

export const SGLAccordion = ({
  title,
  description,
  isDisabled,
  styles,
  ...props
}: SGLAccordionProps) => {
  return (
    <Accordion disabled={isDisabled} sx={{ ...accordionStyles, ...styles }} {...props}>
      <AccordionSummary expandIcon={<SGLArrowDownwardIcon />}>{title}</AccordionSummary>
      <AccordionDetails>{description}</AccordionDetails>
    </Accordion>
  )
}
