let currentTheme = "light";

exports.getTheme = (req, res) => {
    res.json({ theme: currentTheme });
};

// Работа с req.params
exports.setThemeByParam = (req, res) => {
    const { mode } = req.params;

    if (!["light", "dark"].includes(mode)) {
        return res.status(400).json({ error: "Некорректный параметр темы" });
    }

    currentTheme = mode;
    res.json({ message: "Тема изменена через params", theme: currentTheme });
};

// Работа с req.query
exports.checkTheme = (req, res) => {
    const { full } = req.query;

    if (full === "true") {
        return res.json({
            message: "Полная информация",
            theme: currentTheme,
            allowedThemes: ["light", "dark"]
        });
    }

    res.json({ theme: currentTheme });
};

// POST
exports.setTheme = (req, res) => {
    const { theme } = req.body;

    if (!theme || !["light", "dark"].includes(theme)) {
        return res.status(400).json({ error: "Тема должна быть light или dark" });
    }

    currentTheme = theme;
    res.json({ message: "Тема изменена", theme: currentTheme });
};

// PUT — обновление
exports.updateTheme = (req, res) => {
    const { theme } = req.body;

    if (!["light", "dark"].includes(theme)) {
        return res.status(400).json({ error: "Некорректное значение темы" });
    }

    currentTheme = theme;
    res.json({ message: "Тема обновлена (PUT)", theme: currentTheme });
};

// DELETE — сброс
exports.resetTheme = (req, res) => {
    currentTheme = "light";
    res.json({ message: "Тема сброшена", theme: currentTheme });
};
