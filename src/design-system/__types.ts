import {
  AnimationProps,
  BackgroundProps,
  BackgroundColorProps,
  BorderProps,
  EffectsProps,
  FlexboxesProps,
  GridsProps,
  InteractivityProps,
  LayoutProps,
  SizingProps,
  SpaceProps,
  TablesProps,
  TransformProps,
  TransitionsProps,
  TypographyProps,
} from "@xstyled/styled-components";
import React from "react";

// Core properties
export type XAnimationProps = AnimationProps;
export type XBackgroundProps = BackgroundProps;
export type XBackgroundColorProps = BackgroundColorProps;
export type XBorderProps = BorderProps;
export type XEffectsProps = EffectsProps;
export type XFlexboxesProps = FlexboxesProps;
export type XGridsProps = GridsProps;
export type XInteractivityProps = InteractivityProps;
export type XLayoutProps = LayoutProps;
export type XSizingProps = SizingProps;
export type XSPaceProps = SpaceProps;
export type XTablesProps = TablesProps;
export type XTransformProps = TransformProps;
export type XTransitionsProps = TransitionsProps;
export type XTypographyProps = TypographyProps;

// Common props
export type XCommonProps = XAnimationProps &
  XSizingProps &
  XSPaceProps &
  XTypographyProps & {
    // Custom props
    as?: React.ElementType;
    shouldRender?: boolean;
    children?: React.ReactNode;
  };

// Div box props
export type XDivBoxProps = XCommonProps &
  XBackgroundProps &
  XBackgroundColorProps &
  XBorderProps &
  XEffectsProps &
  XFlexboxesProps &
  XGridsProps &
  XInteractivityProps &
  XLayoutProps &
  XTransformProps &
  XTransitionsProps;
