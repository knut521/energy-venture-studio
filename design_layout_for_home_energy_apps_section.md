# Home Energy Apps Section - Layout Design Document

## Executive Summary
This document outlines the comprehensive layout design for the home energy apps section of the MVP, targeting energy-conscious homeowners aged 35-55. The design focuses on addressing key user pain points identified in market research: high energy bills, lack of visibility into energy usage, complex installation processes, and data overload.

## Design Principles

### 1. User-Centric Design
- **Simplicity**: Clean, intuitive interface that minimizes cognitive load
- **Actionable Insights**: Data presented with clear recommendations
- **Progressive Disclosure**: Complex features revealed gradually
- **Accessibility**: WCAG 2.1 compliant with proper contrast ratios

### 2. Technical Foundation
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS for rapid development and consistency
- **Charts**: Recharts or Chart.js for data visualization
- **Icons**: Lucide React for consistent iconography
- **Responsive**: Mobile-first design with tablet/desktop enhancements

## Layout Structure

### Overall Page Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                     Global Header                           │
│  [Logo] [Navigation] [User Menu] [Notifications]           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  Dashboard Overview                 │   │
│  │  [Key Metrics Cards - 4 column grid]               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │               Energy Consumption Chart              │   │
│  │  [Interactive line chart with time filters]         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │               Device Usage Breakdown               │   │
│  │  [Donut chart + device list with consumption]      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                Cost & Savings Analysis              │   │
│  │  [Cost comparison + savings potential]              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                Recommendations                      │   │
│  │  [Actionable energy-saving tips]                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Component Breakdown

### 1. Global Header Component
```jsx
// Components: Logo, Navigation, UserMenu, Notifications
<header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
  <div className="flex items-center space-x-8">
    <Logo className="h-8 w-auto" />
    <nav className="hidden md:flex space-x-6">
      <NavLink href="/dashboard" activeClassName="text-blue-600 font-semibold">
        Dashboard
      </NavLink>
      <NavLink href="/devices" activeClassName="text-blue-600 font-semibold">
        Devices
      </NavLink>
      <NavLink href="/savings" activeClassName="text-blue-600 font-semibold">
        Savings
      </NavLink>
      <NavLink href="/settings" activeClassName="text-blue-600 font-semibold">
        Settings
      </NavLink>
    </nav>
  </div>
  <div className="flex items-center space-x-4">
    <Notifications />
    <UserMenu />
  </div>
</header>
```

### 2. Dashboard Overview Section
```jsx
// Components: MetricCard (4 columns)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
  <MetricCard
    title="Total Energy Today"
    value="12.4 kWh"
    change="+2.3% vs yesterday"
    icon={<LightningIcon />}
    trend="up"
  />
  <MetricCard
    title="Cost Today"
    value="€3.72"
    change="-1.2% vs yesterday"
    icon={<EuroIcon />}
    trend="down"
  />
  <MetricCard
    title="Carbon Footprint"
    value="5.2 kg CO₂"
    change="-8.7% vs yesterday"
    icon={<LeafIcon />}
    trend="down"
  />
  <MetricCard
    title="Savings Potential"
    value="€45/month"
    change="+15% opportunity"
    icon={<PiggyBankIcon />}
    trend="neutral"
  />
</div>
```

### 3. Energy Consumption Chart
```jsx
// Components: InteractiveLineChart, TimeFilter
<div className="bg-white rounded-lg shadow-sm p-6 mb-6">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-semibold text-gray-900">Energy Consumption</h2>
    <TimeFilter 
      options={['24h', '7d', '30d', '90d']}
      selected="7d"
      onChange={handleTimeFilterChange}
    />
  </div>
  <InteractiveLineChart
    data={consumptionData}
    height={300}
    xAxisKey="time"
    yAxisKey="consumption"
    strokeColor="#3b82f6"
    fillColor="#dbeafe"
  />
</div>
```

### 4. Device Usage Breakdown
```jsx
// Components: DonutChart, DeviceList
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h3 className="text-lg font-semibold mb-4">Usage by Device</h3>
    <DonutChart
      data={deviceUsageData}
      width={250}
      height={250}
      innerRadius={60}
      outerRadius={100}
    />
  </div>
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h3 className="text-lg font-semibold mb-4">Top Energy Consumers</h3>
    <DeviceList devices={topConsumers} />
  </div>
</div>
```

### 5. Cost & Savings Analysis
```jsx
// Components: ComparisonChart, SavingsPotential
<div className="bg-white rounded-lg shadow-sm p-6 mb-6">
  <h2 className="text-xl font-semibold mb-6">Cost & Savings Analysis</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <ComparisonChart
      currentCost={currentCost}
      potentialCost={potentialCost}
      savings={savings}
    />
    <SavingsPotential
      monthlyPotential={monthlyPotential}
      yearlyPotential={yearlyPotential}
      recommendations={savingsRecommendations}
    />
  </div>
</div>
```

### 6. Recommendations Section
```jsx
// Components: RecommendationCard
<div className="bg-white rounded-lg shadow-sm p-6">
  <h2 className="text-xl font-semibold mb-6">Energy Saving Recommendations</h2>
  <div className="space-y-4">
    <RecommendationCard
      title="Adjust Thermostat Schedule"
      description="Reduce heating by 2°C during sleeping hours"
      savings="€12/month"
      difficulty="Easy"
      implementationTime="5 minutes"
    />
    <RecommendationCard
      title="Upgrade to LED Lighting"
      description="Replace 10 incandescent bulbs with LEDs"
      savings="€8/month"
      difficulty="Medium"
      implementationTime="30 minutes"
    />
    <RecommendationCard
      title="Optimize Washing Machine Usage"
      description="Run full loads and use cold water settings"
      savings="€6/month"
      difficulty="Easy"
      implementationTime="No time"
    />
  </div>
</div>
```

## Styling & Theme System

### Color Palette
```css
:root {
  --primary: #3b82f6;    /* Blue-500 - Primary actions, main charts */
  --secondary: #64748b;  /* Slate-500 - Secondary text, borders */
  --success: #10b981;   /* Emerald-500 - Positive trends, savings */
  --warning: #f59e0b;   /* Amber-500 - Warnings, medium priority */
  --danger: #ef4444;    /* Red-500 - Errors, high consumption */
  --background: #f8fafc; /* Slate-50 - Page background */
  --card: #ffffff;      /* White - Card backgrounds */
  --text-primary: #1e293b; /* Slate-800 - Primary text */
  --text-secondary: #64748b; /* Slate-500 - Secondary text */
}
```

### Typography Scale
```css
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-base { font-size: 1rem; line-height: 1.5rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
```

### Spacing System
```css
.space-y-2 > * + * { margin-top: 0.5rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.space-y-8 > * + * { margin-top: 2rem; }
```

## Interactions & Animations

### Hover Effects
```css
.hover\:shadow-md:hover { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
.hover\:scale-105:hover { transform: scale(1.05); }
.hover\:bg-blue-50:hover { background-color: #eff6ff; }
```

### Transitions
```css
.transition-all { transition: all 0.2s ease-in-out; }
.transition-colors { transition: background-color 0.2s ease-in-out; }
.transition-transform { transition: transform 0.2s ease-in-out; }
```

### Loading States
```jsx
// Skeleton loading for charts
<Skeleton className="h-64 w-full rounded-lg" />

// Skeleton loading for cards
<Skeleton className="h-32 rounded-lg" />
```

## Responsive Design

### Mobile (320px - 768px)
- Single column layout
- Collapsed navigation menu
- Larger touch targets (min 44px)
- Simplified charts with tap interactions
- Horizontal scrolling for data tables

### Tablet (768px - 1024px)
- 2-column grid for metrics
- Expanded navigation
- Full chart visibility
- Side-by-side components where appropriate

### Desktop (1024px+)
- 4-column metric grid
- Full navigation visible
- Complex data visualizations
- Hover interactions and tooltips

## Accessibility Features

### Screen Reader Support
- Proper ARIA labels for all interactive elements
- Descriptive alt text for charts and images
- Keyboard navigation support
- Focus indicators for all interactive elements

### Color Contrast
- Minimum AA compliance (4.5:1 ratio)
- High contrast mode support
- Color-blind friendly palette
- Text size adjustment support

### Keyboard Navigation
- Tab index management
- Focus trapping for modals
- Escape key support for closing elements
- Arrow key navigation for charts and lists

## Performance Considerations

### Code Splitting
```jsx
// Dynamic imports for heavy components
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <Skeleton />,
  ssr: false
});
```

### Image Optimization
```jsx
// Next.js Image component for optimized loading
<Image
  src="/chart-placeholder.png"
  alt="Energy consumption chart"
  width={600}
  height={400}
  priority={false}
/>
```

### Data Fetching Strategy
- Client-side fetching for real-time data
- Server-side rendering for initial load
- SWR for caching and revalidation
- Debounced search and filter operations

## Implementation Roadmap

### Phase 1: Core Dashboard (MVP)
- [ ] Global header with navigation
- [ ] Metric cards overview
- [ ] Basic energy consumption chart
- [ ] Device usage breakdown
- [ ] Simple recommendations

### Phase 2: Enhanced Features
- [ ] Advanced chart interactions
- [ ] Historical data comparison
- [ ] Customizable dashboard
- [ ] Export functionality
- [ ] Notifications system

### Phase 3: Advanced Analytics
- [ ] AI-powered recommendations
- [ ] Predictive analytics
- [ ] Integration with smart devices
- [ ] Energy tariff optimization
- [ ] Carbon footprint tracking

## Quality Assurance Checklist

### Design Quality
- [ ] Consistent spacing and alignment
- [ ] Proper color contrast ratios
- [ ] Responsive across all breakpoints
- [ ] Accessible to screen readers
- [ ] Performance optimized

### User Experience
- [ ] Intuitive navigation
- [ ] Clear data presentation
- [ ] Actionable insights
- [ ] Minimal loading states
- [ ] Helpful error messages

### Technical Quality
- [ ] TypeScript implementation
- [ ] Proper error handling
- [ ] Unit test coverage
- [ ] Performance benchmarks
- [ ] Security considerations

## Next Steps

1. **Create component library** based on this design system
2. **Implement core dashboard** with sample data
3. **Connect to real APIs** for live energy data
4. **User testing** with target audience
5. **Iterate based on feedback** and analytics

This layout design provides a comprehensive foundation for the home energy apps section, addressing the key user needs identified in market research while maintaining technical excellence and scalability.