import type * as React from 'react';

/** Atalhos da Quero Obras. Qualquer nome do Material Symbols (ex.: 'roofing', 'carpenter') também funciona. */
export type IconName = 'home' | 'search' | 'pintura' | 'reforma' | 'eletrica' | 'hidraulica' | 'grid' | 'chat' | 'bell' | 'user' | 'check' | 'check-circle' | 'shield' | 'verificado' | 'chevron-right' | 'chevron-left' | 'chevron-down' | 'arrow-left' | 'close' | 'plus' | 'star' | 'map-pin' | 'calendar' | 'clock' | 'filter' | 'heart' | 'menu' | 'more' | 'pedidos' | 'image' | 'info' | 'alert' | 'camera' | 'phone' | 'edit' | 'trash' | 'send' | 'ferramentas' | 'casa' | 'orcamento' | 'pagamento' | 'foto' | 'compartilhar' | (string & {});
export type Tone = 'neutro' | 'sucesso' | 'marca' | 'info' | 'aviso' | 'erro';

/* Átomos */
export interface IconProps { /** Atalho da Quero Obras ou nome do Material Symbols */ name: IconName; /** Versão preenchida (FILL 1). Padrão: contorno (FILL 0) */ filled?: boolean; /** Tamanho em px. Padrão 24 (ou o do componente pai) */ size?: number; /** Peso do traço, 100–700. Padrão 400 */ weight?: number; /** Ênfase, -25 a 200. Padrão 0 */ grade?: number; /** Texto para leitores de tela; sem ele o ícone é decorativo */ label?: string; className?: string; style?: React.CSSProperties }
export declare function Icon(props: IconProps): React.ReactElement;
export interface BadgeProps { /** Padrão 'neutro' */ tone?: Tone; icon?: IconName; /** Ícone preenchido */ iconFilled?: boolean; /** Mostra um contador vermelho (notificações) no lugar do texto */ count?: number; children?: React.ReactNode; className?: string }
export declare function Badge(props: BadgeProps): React.ReactElement;
export interface AvatarProps { /** Nome da pessoa: gera as iniciais e o texto alternativo */ name?: string; src?: string; /** Padrão 'md' (40px) */ size?: 'sm' | 'md' | 'lg'; className?: string }
export declare function Avatar(props: AvatarProps): React.ReactElement;
export interface DividerProps { inset?: boolean; className?: string }
export declare function Divider(props: DividerProps): React.ReactElement;
export interface SpinnerProps { size?: 'sm' | 'md'; inverse?: boolean; label?: string; className?: string }
export declare function Spinner(props: SpinnerProps): React.ReactElement;
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> { label: React.ReactNode; description?: React.ReactNode }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> { label: React.ReactNode; description?: React.ReactNode }
export declare function Radio(props: RadioProps): React.ReactElement;
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: React.ReactNode }
export declare function Switch(props: SwitchProps): React.ReactElement;
export interface RatingProps { /** Nota de 0 a 5 */ value: number; /** Número de avaliações */ count?: number; /** Uma estrela + número */ compact?: boolean; className?: string }
export declare function Rating(props: RatingProps): React.ReactElement;

/* Moléculas */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Padrão 'primario' (CTA laranja). Um primário por tela. */
  variant?: 'primario' | 'secundario' | 'tonal' | 'contorno' | 'link' | 'perigo';
  /** sm 36px · md 48px · lg 56px. Padrão 'md' */
  size?: 'sm' | 'md' | 'lg';
  icon?: IconName; iconRight?: IconName;
  /** Mostra um spinner e desabilita o botão */
  loading?: boolean;
  /** Ocupa toda a largura */
  block?: boolean;
  href?: string;
}
export declare function Button(props: ButtonProps): React.ReactElement;
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: IconName; /** Obrigatório: nome acessível */ label: string; variant?: 'contorno' | 'secundario' | 'tonal'; badge?: number }
export declare function IconButton(props: IconButtonProps): React.ReactElement;
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: string; helper?: string; /** Mensagem de erro: deixa o campo vermelho e substitui o helper */ error?: string | null; icon?: IconName; iconRight?: IconName; multiline?: boolean }
export declare function TextField(props: TextFieldProps): React.ReactElement;
export interface SelectProps { label?: string; helper?: string; error?: string | null; icon?: IconName; /** Texto quando nada está escolhido. Padrão 'Selecione' */ placeholder?: string; /** Lista de opções; cada uma pode ter ícone */ options: Array<string | { value: string; label: string; icon?: IconName }>; value?: string; defaultValue?: string; /** Recebe { target: { value, name } }, como um select nativo */ onChange?: (e: { target: { value: string; name?: string } }) => void; name?: string; disabled?: boolean; required?: boolean; /** Começa aberto (útil em documentação) */ defaultOpen?: boolean; id?: string; className?: string }
export declare function Select(props: SelectProps): React.ReactElement;
export interface DatePickerProps { label?: string; helper?: string; error?: string | null; /** Data no formato AAAA-MM-DD */ value?: string; defaultValue?: string; /** Recebe a data em AAAA-MM-DD ('' ao limpar) */ onChange?: (iso: string) => void; /** Primeira data permitida (AAAA-MM-DD) */ min?: string; /** Última data permitida (AAAA-MM-DD) */ max?: string; /** Padrão 'dd/mm/aaaa' */ placeholder?: string; name?: string; disabled?: boolean; required?: boolean; defaultOpen?: boolean; id?: string; className?: string }
export declare function DatePicker(props: DatePickerProps): React.ReactElement;
export interface SearchFieldProps { value?: string; defaultValue?: string; onChange?: (value: string) => void; onSubmit?: (value: string) => void; placeholder?: string; label?: string; variant?: 'padrao' | 'preenchida'; className?: string }
export declare function SearchField(props: SearchFieldProps): React.ReactElement;
export interface ServiceTileProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: IconName; label: string; selected?: boolean }
export declare function ServiceTile(props: ServiceTileProps): React.ReactElement;
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon?: IconName; selected?: boolean; onRemove?: () => void }
export declare function Chip(props: ChipProps): React.ReactElement;
export interface ListItemProps { title: React.ReactNode; subtitle?: React.ReactNode; leading?: React.ReactNode; leadingIcon?: IconName; trailing?: React.ReactNode; chevron?: boolean; onClick?: () => void; href?: string; className?: string }
export declare function ListItem(props: ListItemProps): React.ReactElement;
export interface ToastProps { message: React.ReactNode; tone?: 'neutro' | 'sucesso' | 'erro'; actionLabel?: string; onAction?: () => void; onClose?: () => void; className?: string }
export declare function Toast(props: ToastProps): React.ReactElement;

/* Organismos */
export interface AppBarAction { icon: IconName; label: string; onClick?: () => void; badge?: number }
export interface AppBarProps { title?: string; logo?: string; logoAlt?: string; onBack?: () => void; actions?: AppBarAction[]; /** Fundo branco com borda (telas internas) */ surface?: boolean; center?: boolean; className?: string }
export declare function AppBar(props: AppBarProps): React.ReactElement;
export interface GreetingHeaderProps { title: React.ReactNode; subtitle?: React.ReactNode; badge?: React.ReactNode; className?: string }
export declare function GreetingHeader(props: GreetingHeaderProps): React.ReactElement;
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> { /** Padrão 'elevado' */ variant?: 'elevado' | 'contorno' | 'destaque'; /** Padding de 20px. Padrão true */ padded?: boolean }
export declare function Card(props: CardProps): React.ReactElement;
export interface PromoCardProps { title: React.ReactNode; text?: React.ReactNode; image?: string; imageAlt?: string; primaryLabel?: string; primaryVariant?: 'primario' | 'secundario'; onPrimary?: () => void; secondaryLabel?: string; onSecondary?: () => void; className?: string }
export declare function PromoCard(props: PromoCardProps): React.ReactElement;
export interface ProfessionalCardProps { name: string; role: string; photo?: string; verified?: boolean; rating?: number; reviews?: number; city?: string; responseTime?: string; tags?: string[]; onProfile?: () => void; onQuote?: () => void; className?: string }
export declare function ProfessionalCard(props: ProfessionalCardProps): React.ReactElement;
export interface StepperProps { /** Padrão ['Pedido','Propostas','Escolha'] */ steps?: string[]; /** Índice da etapa atual (0…) */ current?: number; label?: string; className?: string }
export declare function Stepper(props: StepperProps): React.ReactElement;
export interface ServiceGridProps { items?: Array<{ icon: IconName; label: string }>; value?: string; onSelect?: (label: string) => void; label?: string; className?: string }
export declare function ServiceGrid(props: ServiceGridProps): React.ReactElement;
export interface BottomNavProps { items: Array<{ icon: IconName; label: string; badge?: number }>; value: number | string; onChange?: (index: number, label: string) => void; label?: string; className?: string }
export declare function BottomNav(props: BottomNavProps): React.ReactElement;
export interface TabsProps { items: string[]; value: number; onChange?: (index: number) => void; className?: string }
export declare function Tabs(props: TabsProps): React.ReactElement;
export interface ModalProps { open: boolean; onClose?: () => void; title: React.ReactNode; icon?: IconName; actions?: React.ReactNode; children?: React.ReactNode; /** Prende o modal ao elemento pai (position:absolute) */ contained?: boolean; className?: string }
export declare function Modal(props: ModalProps): React.ReactElement | null;
export interface BottomSheetProps { open: boolean; onClose?: () => void; title?: React.ReactNode; children?: React.ReactNode; contained?: boolean; className?: string }
export declare function BottomSheet(props: BottomSheetProps): React.ReactElement | null;
export interface EmptyStateProps { icon?: IconName; title: React.ReactNode; text?: React.ReactNode; action?: React.ReactNode; className?: string }
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;
export interface QuoteFormValues { servico: string; cidade: string; descricao: string; prazo: string; data: string; fotos: boolean }
export interface QuoteFormProps { services?: string[]; cities?: string[]; defaultService?: string; onSubmit?: (values: QuoteFormValues) => void; loading?: boolean; submitLabel?: string; className?: string }
export declare function QuoteForm(props: QuoteFormProps): React.ReactElement;

/* Layout */
export interface ContainerProps { children?: React.ReactNode; className?: string; style?: React.CSSProperties }
export declare function Container(props: ContainerProps): React.ReactElement;
export interface GridProps { children?: React.ReactNode; className?: string; style?: React.CSSProperties }
export declare function Grid(props: GridProps): React.ReactElement;
export interface ColProps { /** Colunas no celular (de 4). Padrão 4 */ sm?: number; /** Colunas no tablet (de 8) */ md?: number; /** Colunas no desktop (de 12) */ lg?: number; children?: React.ReactNode; className?: string; style?: React.CSSProperties }
export declare function Col(props: ColProps): React.ReactElement;
export interface StackProps { direction?: 'column' | 'row'; /** Passo da escala de espaçamento (space-N). Padrão 4 */ gap?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16; as?: string; children?: React.ReactNode; className?: string; style?: React.CSSProperties }
export declare function Stack(props: StackProps): React.ReactElement;
export interface AppShellProps { appBar?: React.ReactNode; bottomNav?: React.ReactNode; fab?: React.ReactNode; footer?: React.ReactNode; children?: React.ReactNode; className?: string; style?: React.CSSProperties }
export declare function AppShell(props: AppShellProps): React.ReactElement;

declare global { interface Window { QueroObras: { Icon: typeof Icon; Badge: typeof Badge; Avatar: typeof Avatar; Divider: typeof Divider; Spinner: typeof Spinner; Checkbox: typeof Checkbox; Radio: typeof Radio; Switch: typeof Switch; Rating: typeof Rating; Button: typeof Button; IconButton: typeof IconButton; TextField: typeof TextField; Select: typeof Select; DatePicker: typeof DatePicker; SearchField: typeof SearchField; ServiceTile: typeof ServiceTile; Chip: typeof Chip; ListItem: typeof ListItem; Toast: typeof Toast; AppBar: typeof AppBar; GreetingHeader: typeof GreetingHeader; Card: typeof Card; PromoCard: typeof PromoCard; ProfessionalCard: typeof ProfessionalCard; Stepper: typeof Stepper; ServiceGrid: typeof ServiceGrid; BottomNav: typeof BottomNav; Tabs: typeof Tabs; Modal: typeof Modal; BottomSheet: typeof BottomSheet; EmptyState: typeof EmptyState; QuoteForm: typeof QuoteForm; Container: typeof Container; Grid: typeof Grid; Col: typeof Col; Stack: typeof Stack; AppShell: typeof AppShell } } }
