import React, {
    createContext,
    useContext,
    useState,
    FC,
    ReactNode,
} from 'react';

interface EventCardContextType {
    page: number;
    nextPage: () => void;
    prevPage: () => void;
}

const EventCardContext = createContext<EventCardContextType | undefined>(
    undefined,
);

export const useEventCard = () => {
    const context = useContext(EventCardContext);
    if (!context) {
        throw new Error(
            'useEventCard must be used within an EventCardProvider',
        );
    }
    return context;
};

export const EventCardProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [page, setPage] = useState(0);

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));

    return (
        <EventCardContext.Provider value={{ page, nextPage, prevPage }}>
            {children}
        </EventCardContext.Provider>
    );
};
