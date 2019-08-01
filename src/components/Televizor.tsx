import React from 'react';

export const Televizor = ({children}) => (
    <div className="displ-t">
        <div className="displ-l">
            <div className="displ-r">
                <div className="displ-b">
                    <div className="displ-tl">
                        <div className="displ-tr">
                            <div className="displ-bl">
                                <div className="displ-br">
                                    <div className="displ">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
