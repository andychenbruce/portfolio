
;; rust-analyzer.linkedProjects

((rust-ts-mode
  . ((eglot-workspace-configuration
      . (:rust-analyzer
	 (:linkedProjects ["static/new_stuff_src/Cargo.toml"]))))))
